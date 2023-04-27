import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { auth, db } from "./Firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
  Box,
  Anchor,
  Stack,
  createStyles,
  rem,
} from "@mantine/core";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AuthenticationPage.css";

function RegisterManufacturer(props) {
    const { classes } = useStyles();
  const [type, toggle] = useToggle(["login", "register"]);

  const form = useForm({
    initialValues: {
      manufacturer_email: "",
      name: "",
      phone: "",
      password: "",
      confirm: "",
      terms: true,
    },

    validate: {
      distributor_email: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Invalid email",
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      phone: (val) =>
        val.length > 10 ? "phone number should be only 10 digits" : null,
    },
  });
  console.log(form.values);

  // const handleRegister = async () => {

  //   const response = await fetch("http://localhost:8080/register",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(form),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }
  //   );

  //   console.log(response);

  // }

  const handleRegister = async () => {
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        form.values.manufacturer_email,
        form.values.password
      );
      console.log(user);
      props.setShowRegister((prev) => !prev);
    } catch (err) {
      console.log(err.message);
    }

    const user = {
      email: form.values.manufacturer_email,
      name: form.values.name,
      phone: form.values.phone,
    };
    const docRef = doc(db, `Users/Manufacturers/users/${user.email}`);
    console.log(docRef.path);

    await setDoc(docRef, user).then(() => {
      console.log("registerd");
    });
  };

  return (
    <Box className="modal">
      <Link to="/register">
        <KeyboardBackspaceIcon />
      </Link>

      <Box className="modal-header">
        <Text color="dark">You are a Manufacturer</Text>
      </Box>

      <form
        className="modal-content"
        onSubmit={form.onSubmit(() => {
          handleRegister();
        })}
      >
        <Box>
          <TextInput
            classNames={classes}
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.manufacturer_email}
            onChange={
              (event) =>
                form.setFieldValue(
                  "manufacturer_email",
                  event.currentTarget.value
                )
              // setEmail(event.target.value)
            }
            error={form.errors.manufacturer_email && "Invalid email"}
            radius="md"
          />

          <TextInput mt={15}
            classNames={classes}
            label="Name"
            placeholder="Enter your full name"
            value={form.values.name}
            onChange={
              (event) => form.setFieldValue("name", event.currentTarget.value)
              // setEmail(event.target.value)
            }
            error={form.errors.name}
            radius="md"
          />

          <TextInput mt={15}
            classNames={classes}
            label="Phone"
            placeholder="+91"
            value={form.values.phone}
            onChange={(event) =>
              form.setFieldValue("phone", event.currentTarget.value)
            }
            error={form.errors.phone && "Invalid phone number"}
            radius="md"
          />

          <TextInput mt={15}
            classNames={classes}
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

          <TextInput mt={15}
            classNames={classes}
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
          </Anchor>
          <Button type="submit" radius="xl" onClick={handleRegister}>
            {upperFirst(type) + " as Manufacturer"}
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default RegisterManufacturer;

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
