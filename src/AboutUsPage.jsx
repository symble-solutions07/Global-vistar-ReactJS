import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "./images/hero-banner.png";
import homePic from "./images/Untitled design 1.png";

const useStyles = createStyles((theme) => ({
  //   inner: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     paddingTop: `calc(${theme.spacing.xl} * 4)`,
  //     paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  //   },

  //   content: {
  //     maxWidth: "500px",
  //     // marginRight: `calc(${theme.spacing.xl} * 3)`,

  //     // [theme.fn.smallerThan("md")]: {
  //     //   maxWidth: "100%",
  //     //   marginRight: 0,
  //     // },
  //   },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

function AboutUsPage() {
  const { classes } = useStyles();
  return (
    <>
      <div
        className="about-us-page"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div>
          <div
            className="left-about-us"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="left-about-us"
              style={{ width: "900px", marginLeft: "7rem" }}
            >
              <Title className={classes.title}>Lorem Ipsum</Title>
              <Text color="dimmed" mt="md">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                //   icon={
                //     <ThemeIcon size={20} radius="xl">
                //       <IconCheck size={rem(12)} stroke={1.5} />
                //     </ThemeIcon>
                //   }
              >
                <List.Item>
                  <b>Point 1</b> – Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, itaque.
                </List.Item>
                <List.Item>
                  <b>Point 2</b> – Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, itaque.
                </List.Item>
                <List.Item>
                  <b>Point 3</b> – Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, itaque.
                </List.Item>
              </List>
            </div>
            {/* <Image src={image.src} className={classes.image} /> */}
            <img
              src={homePic}
              alt="Modern house model"
              style={{
                width: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            className="left-about-us"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="left-about-us"
              style={{ width: "900px", marginLeft: "7rem" }}
            >
              <Title className={classes.title}>Lorem Ipsum</Title>
              <Text color="dimmed" mt="md">
                Build fully functional accessible web applications faster than
                ever – Mantine includes more than 120 customizable components
                and hooks to cover you in any situation
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                //   icon={
                //     <ThemeIcon size={20} radius="xl">
                //       <IconCheck size={rem(12)} stroke={1.5} />
                //     </ThemeIcon>
                //   }
              >
                <List.Item>
                  <b>Point 1</b> – Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, itaque.
                </List.Item>
                <List.Item>
                  <b>Point 2</b> – Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, itaque.
                </List.Item>
                <List.Item>
                  <b>Point 3</b> – Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quis, itaque.
                </List.Item>
              </List>
            </div>
            {/* <Image src={image.src} className={classes.image} /> */}
            <img
              src={homePic}
              alt="Modern house model"
              style={{
                width: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
