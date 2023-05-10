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
import { auth, db } from "../Firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Select,
  FileInput,
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
      category: "",
      product_name: "",
      product_description: "",
      product_code: "",
      upload_image:"",
      GST: "",
      min_exp_profit_margin: "",
      min_order_quantity: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  console.log(form.values);
  const navigate = useNavigate();

  const handleListing = async () => {

    

    const user = {
      email: form.values.email,
      category: form.values.category,
      product_name: form.values.product_name,
      product_description: form.values.product_description,
      product_code: form.values.product_code,
      GST: form.values.GST,
      minimun_expected_profit_margin: form.values.min_exp_profit_margin,
      min_order_quantity: form.values.min_order_quantity,
    };
    const docRef = doc(
      db,
      `Users/Manufacturers/users/${sessionStorage.getItem("email")}/Products/${user.product_code}`
    );
    console.log(docRef.path);

    await setDoc(docRef, user).then(() => {
      console.log("Product Listed");
      navigate("/");
    });


  };

  return (
    <>
      <div>
        <h1 className="list-your-products-head">List Your Products</h1>
      </div>
      <Box maw={300} mx="auto" className="list-your-products-box">
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          className="list-your-products-section"
        >
          <Box>
            {/* <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              // placeholder="your@email.com"
              value={form.values.email}
              onChange={
                (event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                // setEmail(event.target.value)
              }
            /> */}
            <Select
              withAsterisk
              label="Choose Category"
              classNames={classes}
              data={[
                { value: "Beverages", label: "Beverages" },
                {
                  value: "Fashion and Textile",
                  label: "Dairy and frozen",
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
              // placeholder="your@email.com"
              {...form.getInputProps("category")}
              value={form.values.category}
              // onChange={
              //   (event) =>
              //     form.setFieldValue(
              //       "category",
              //       event.currentTarget.value
              //     )
              //   // setEmail(event.target.value)
              // }
            />
            <TextInput
              withAsterisk
              label="Product Name"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("product_name")}
            />
            <TextInput
              withAsterisk
              label="Product Code"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("product_code")}
            />
            <TextInput
              withAsterisk
              label="Product Description"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("product_description")}
            />
          </Box>
          <Box>
            <FileInput
              withAsterisk
              label="Upload Picture"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("upload_image")}
            />
            <Select
              withAsterisk
              label="GST * (only choose one option)"
              classNames={classes}
              data={[
                { value: "0%", label: "0%" },
                {
                  value: "5%",
                  label: "5%",
                },
                {
                  value: "12%",
                  label: "18%",
                },
                {
                  value: "12%",
                  label: "18%",
                },
              ]}
              // placeholder="your@email.com"
              {...form.getInputProps("GST")}
              // 0%  5%  12%  18%  28%
            />
            <TextInput
              withAsterisk
              label="Minimum Expected Profit Margin"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("min_exp_profit_margin")}
            />
            <TextInput
              withAsterisk
              label="Minimum Order Quantity*"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("min_order_quantity")}
            />
          </Box>
        </form>
        <div className="submit-btn-list-products">
          <Group position="right" mt="md">
            <Button type="submit" onClick={handleListing}>
              Submit
            </Button>
          </Group>
        </div>
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
    width: rem(400),
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
