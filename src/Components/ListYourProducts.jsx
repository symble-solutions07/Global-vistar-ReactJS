// Your Email *
// Choose Category (Add options of the sub-category) (only choose one option)
// Product Name *
// Product Code
// Product Description *
// Upload Picture   *
// GST * (only choose one option)
// 0%  5%  12%  18%  28%
// Minimum Expected Profit Margin
// Minimum Order Quantity*

import React from "react";
import {
  TextInput,
  Select,
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
import { useForm } from "@mantine/form";
import "../ListYourProducts.css";

function ListYourProducts() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <div>
        <h1>List Your Products</h1>
      </div>
      <Box maw={300} mx="auto" className="list-your-products-box">
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          className="list-your-products-section"
        >
          <Box>
            <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <Select
              withAsterisk
              label="Email"
              classNames={classes}
              data={[
                { value: "Beverages", label: "Beverages" },
                {
                  value: "Fashion and Textile",
                  label: "Dairy and frozen"
                },
                {
                  value: "Medicines and Nutraceuticals",
                  label: "Grains and spices",
                },
                {
                  value: "Consumer Electronics",
                  label: "Ready to cook ",
                },
                {
                  value: "Toiletries and Cosmetics",
                  label: "Snacks and Savouries",
                },
                {
                  value: "Tooling and Machinery",
                  label: "Sugar and confectionery ",
                },
              ]}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
          </Box>
          <Box>
            <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
          </Box>
        </form>
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Box>
    </>
  );
}

export default ListYourProducts;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    // width: "100%",
    height: rem(54),
      paddingTop: rem(18),
      marginTop: rem(20),
    width:rem(400)
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
    // width: "180%",
  },

  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    input: {
      width: "120%",
      height: "2.5em",
      paddingTop: "0.25em",
    },
    label: {
      width: "180%",
      fontSize: "0.9em",
      paddingTop: "0.2em",
    },
  },
}));
