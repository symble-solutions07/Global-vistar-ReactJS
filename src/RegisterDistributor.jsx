import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { auth, db } from "./Firebase/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

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
  Box,
  createStyles,
  rem,
} from "@mantine/core";
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { dividerClasses } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AuthenticationPage.css";

function RegisterDistributor(props) {
  const { classes } = useStyles();
  const [type, toggle] = useToggle(["login", "register"]);

  const form = useForm({
    initialValues: {
      distributor_email: "",
      name: "",
      phone: "",
      location: "",
      password: "",
      confirm: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      phone: (val) =>
        val.length > 10 || val.length < 10
          ? "phone number should be only 10 digits"
          : null,
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
    <Box
      className="modal"
    >
      <Link to="/register">
        <KeyboardBackspaceIcon />
      </Link>

      
      <Box className="modal-header">
        <Text color="dark">You are a Distributor</Text>
      </Box>

      <form  className="modal-content" onSubmit={form.onSubmit(() => {})}>
        <Box>
          <TextInput
            classNames={classes}
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.distributor_email}
            onChange={(event) =>
              form.setFieldValue("distributor_email", event.currentTarget.value)
            }
            error={form.errors.distributor_email && "Invalid email"}
            radius="md"
          />
          <TextInput
            classNames={classes} mt={10}
            label="Name"
            placeholder="Enter your name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            error={form.errors.name}
            radius="md"
          />

          <TextInput
            classNames={classes} mt={10}
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
            classNames={classes} mt={10}
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
            classNames={classes} mt={10}
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
        </Box>

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
    </Box>
  );
}

export default RegisterDistributor;


const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));
