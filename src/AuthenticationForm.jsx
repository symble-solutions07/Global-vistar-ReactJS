import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
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
} from '@mantine/core';
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { dividerClasses } from '@mui/material';
import "./AuthenticationPage.css";

function AuthenticationForm(props) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      location:'',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <div className="authentication-section">
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        style={{
          width: "30%",
          margin: "auto",
        }}
        className="xyz"
      >
        <Group grow mb="md" mt="md">
          <FacebookIcon radius="xl">Facebook</FacebookIcon>
          <InstagramIcon radius="xl">Instagram</InstagramIcon>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
            )}

            <TextInput
              // required
              label="Name"
              placeholder="Enter your full name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              // error={form.errors.name && "Invalid email"}
              radius="md"
            />
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
              label="Phone Number"
              placeholder="+91"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              error={form.errors.phone && "Invalid phone"}
              radius="md"
            />

            <TextInput
              // required
              label="Current Location"
              placeholder="Enter Your City"
              value={form.values.location}
              onChange={(event) =>
                form.setFieldValue("location", event.currentTarget.value)
              }
              error={
                form.errors.location &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
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
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}

export default AuthenticationForm;

// import React from 'react'
// import { Modal, Button } from "react-bootstrap";

// function AuthenticationForm() {
//   function ModalDialog() {
    
//     return (
//       <>
//         {/* <Button variant="success" onClick={initModal}>
//           Open Modal
//         </Button> */}
//         <Modal >
//           <Modal.Header closeButton >
//             <Modal.Title>React Modal Popover Example</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="danger" >
//               Close
//             </Button>
//             <Button variant="dark" >
//               Store
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
// }

// export default AuthenticationForm;