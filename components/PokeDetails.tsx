import { createStyles, Text, Image, Group } from "@mantine/core"
import { PokeData } from "../types"
import { capitalize } from "../utils"

const useStyles = createStyles((theme) => ({
  div: {
    marginTop: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
}))

interface PokeDetailsProps {
  data: PokeData
}

export default function PokeDetails({ data }: PokeDetailsProps) {
  const { classes } = useStyles()
  const { name, types, abilities, height, weight, sprites } = data

  return (
    <>
      <Group pt="xl" position="center">
        <Image src={sprites.front_default} width={100} alt={name} />
        {sprites.back_default && (
          <Image src={sprites.back_default} width={100} alt={name} />
        )}
      </Group>
      <div className={classes.div}>
        <Text weight={400} size="md">
          <span style={{ fontWeight: 600 }}>Height:</span> {height / 10}m
        </Text>
        <Text weight={400} size="md">
          <span style={{ fontWeight: 600 }}>Weight:</span>{" "}
          {(weight / 10).toLocaleString("en")}kg
        </Text>
        <Text weight={400} size="md">
          <span style={{ fontWeight: 600 }}>Types:</span>{" "}
          {types.map((type) => capitalize(type.type.name)).join(", ")}
        </Text>
        <Text weight={400} size="md">
          <span style={{ fontWeight: 600 }}>Abilities:</span>{" "}
          {abilities
            .map((ab) => {
              const abName = ab.ability.name
              const cleanAbName = abName.replace(/-/g, " ")
              return capitalize(cleanAbName)
            })
            .join(", ")}
        </Text>
      </div>
    </>
  )
}
