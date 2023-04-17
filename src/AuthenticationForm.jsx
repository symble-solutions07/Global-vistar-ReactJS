import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";
import { auth } from "./Firebase/firebase-config";
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
import DistributorRegister from "./RegisterDistributor";
import ManufacturerRegister from "./RegisterManufacturer";

import "./AuthenticationPage.css";

function AuthenticationForm(props) {
  const [type, toggle] = useToggle(["login", "register"]);
  const [userType, setUserType] = useState("");

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  console.log(user);
  
  
  

  
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleLogin = async () => {
    // const response = await fetch("http://localhost:8080/login", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // console.log(response);


    signInWithEmailAndPassword(auth, form.values.email, form.values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("user is logged in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
    
    
    
      
    // console.log(userCreds);
  };

  
  

  return (
    <div className="authentication-section">
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
        <Group grow mb="md" mt="md">
          {/* <FacebookIcon radius="xl">Facebook</FacebookIcon> */}
          <Button onClick={() => toggle("login")}>Login</Button>
          {/* <InstagramIcon radius="xl">Instagram</InstagramIcon> */}
          <Button onClick={() => toggle("register")}>Register</Button>
        </Group>

        <Divider label="Login" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => {handleLogin()})}>
          <Stack>
            {/* {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
            )} */}

            {type === "register" ? (
              <>
                <Button onClick={() => setUserType("manufacturer")}>
                  Register as Manufacturer
                </Button>
                <Button onClick={() => setUserType("distributor")}>
                  Register as Distributor
                </Button>
              </>
            ) : (
              <>
                <TextInput
                  // required
                  label="Email"
                  placeholder="hello@mantine.dev"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                />
                <TextInput
                  // required
                  label="Password"
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
              </>
            )}
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
            <Button type="submit" radius="xl" >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
      {userType === "manufacturer" ? <ManufacturerRegister /> : null}
      {userType === "distributor" ? <DistributorRegister /> : null}
    </div>
  );
}

export default AuthenticationForm;
