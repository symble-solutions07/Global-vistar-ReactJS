import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { auth,db } from "./Firebase/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { dividerClasses } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AuthenticationPage.css";

function RegisterDistributor(props) {
  const [type, toggle] = useToggle(["login", "register"]);

  const form = useForm({
    initialValues: {
      distributor_email: "",
      name: "",
      phone: "",
      location: "",
      password: "",
      confirm:"",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>(
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null),
      phone: (val)=>(val.length >10 || val.length < 10 ? "phone number should be only 10 digits" : null),
    },
    
  });

  // const handleRegister = async () => {
  //   const response = await fetch("http://localhost:8080/registerDistributor", {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   console.log(response);
  // };
  const handleRegister = async () => {
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        form.values.distributor_email,
        form.values.password
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }

    const user = {
      email: form.values.distributor_email,
      name: form.values.name,
      phone: form.values.phone,
    };
    const docRef = doc(db, `Users/Distributors/users/${user.email}`);
    console.log(docRef.path);

    await setDoc(docRef, user).then(() => {
      console.log("registerd");
    }); 
  };

  return (
    <div className="authentication-section" style={{ width:"10rem" }}>
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        style={{
          margin: "auto",
        }}
        className="auth-container"
      >
        <a href="/">
          <KeyboardBackspaceIcon />
        </a>

        <Divider label="You are a distributor" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              // required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.distributor_email}
              onChange={(event) =>
                form.setFieldValue(
                  "distributor_email",
                  event.currentTarget.value
                )
              }
              error={form.errors.distributor_email && "Invalid email"}
              radius="md"
            />
            <TextInput
              // required
              label="Name"
              placeholder="Enter your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue(
                  "name",
                  event.currentTarget.value
                )
              }
              error={form.errors.name}
              radius="md"
            />

            <TextInput
              // required
              label="Phone"
              placeholder="+91"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              error={form.errors.phone && "Invalid phone number"}
              radius="md"
            />

            <TextInput
              // required
              label="Create Password"
              placeholder="Enter Your Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            <TextInput
              // required
              label="Re-Enter Password"
              placeholder="Re-Enter Your Password"
              value={form.values.confirm}
              onChange={(event) =>
                form.setFieldValue("confirm", event.currentTarget.value)
              }
              error={
                form.errors.confirm &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {/* {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"} */}
            </Anchor>
            <Button type="submit" radius="xl" onClick={handleRegister}>
              {upperFirst(type) + " as Distributor"}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}

export default RegisterDistributor;
