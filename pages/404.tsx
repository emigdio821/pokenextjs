import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    borderRadius: theme.radius.xl,
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 180,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[3],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 140,
    },
  },

  title: {
    fontSize: 38,
    fontWeight: 900,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}))

export default function FourOhFour() {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page.
      </Text>
      <Group position="center">
        <Link href="/" passHref>
          <Button component="a" color="violet">
            Back to home
          </Button>
        </Link>
      </Group>
    </Container>
  )
}
