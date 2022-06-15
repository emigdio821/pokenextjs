import { motion } from "framer-motion"
import {
  Grid,
  Card,
  Text,
  Image,
  Group,
  Badge,
  Button,
  createStyles,
  Skeleton,
} from "@mantine/core"
import { useState } from "react"
import { ListDetails } from "tabler-icons-react"
import { capitalize } from "../utils"
import POKEMON_TYPES from "../constants"
import { PokeData, PokeType } from "../types"

interface PokeCardItemsProps {
  data: PokeData
  modalCallback: (pokeName: string) => void
}

const useStyles = createStyles((theme) => ({
  section: {
    padding: theme.spacing.md,
  },
}))

export default function PokeCardItem({
  data,
  modalCallback,
}: PokeCardItemsProps) {
  const { classes } = useStyles()
  const [showShiny, setShowShiny] = useState(false)
  const handleImgCLick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setShowShiny(!showShiny)
  }

  return (
    <Grid.Col xs={6} sm={4} lg={3} xl={2}>
      <motion.div
        layout
        initial={{ y: 20, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0.2 }}
      >
        {/* <Card
            p="lg"
            shadow="sm"
            radius="lg"
            withBorder
            sx={() => ({
              cursor: "pointer",
              transition: "transform 0.2s",
              ".mantine-Image-root": {
                transition: "transform 0.2s",
              },
              "&:hover": {
                ".mantine-Image-root": {
                  transform: "rotate(5deg)",
                },
                transform: "translateY(-5px)",
              },
            })}
          >
            <Skeleton visible={!data} radius={!data ? "lg" : undefined}>
              {!data.sprites.front_default && (
                <Skeleton
                  circle
                  height={150}
                  animate={false}
                  style={{
                    margin: "0 auto",
                  }}
                />
              )}
              {data.sprites.front_default && (
                <Group position="center">
                  <motion.div
                    animate={{ transform: "scale(1)" }}
                    exit={{ transform: "scale(-0.1)" }}
                    initial={{ transform: "scale(0.1)" }}
                    key={showShiny ? "shiny" : "default"}
                  >
                    <Image
                      fit="cover"
                      width={150}
                      height={150}
                      alt={data.name}
                      style={{
                        cursor: data.sprites.front_shiny
                          ? "pointer"
                          : "default",
                      }}
                      src={
                        showShiny
                          ? data.sprites.front_shiny ??
                            data.sprites.front_default
                          : data.sprites.front_default
                      }
                      onClick={handleImgCLick}
                    />
                  </motion.div>
                </Group>
              )}
              <Group position="center" my={10}>
                <Badge
                  size="sm"
                  color="gray"
                  variant="dot"
                >{`${data.id}`}</Badge>
              </Group>
              <Group position="apart">
                <Title order={4}>{data.name}</Title>
              </Group>
              <Text size="sm">
                {data.name} is a Pokemon that is <b>{data.height / 10}m</b> tall
                and <b>{data.weight / 10}kg</b> heavy.
              </Text>
              <Group position="left" mt="md" spacing="xs">
                {data.types.map(({ type: { name } }: PokeType) => {
                  const t = POKEMON_TYPES.find((ptype) => ptype.value === name)
                  const tColor = t?.color || "dark"
                  return (
                    <Badge
                      key={name}
                      radius="sm"
                      variant="gradient"
                      gradient={{ from: tColor, to: tColor }}
                    >
                      {name}
                    </Badge>
                  )
                })}
              </Group>
            </Skeleton>
          </Card> */}

        <Card
          withBorder
          radius="md"
          sx={() => ({
            transition: "transform 0.2s",
            ".mantine-Image-root": {
              transition: "transform 0.2s",
            },
            "&:hover": {
              ".mantine-Image-root": {
                transform: "rotate(5deg)",
              },
              transform: "translateY(-5px)",
            },
          })}
        >
          {!data.sprites.front_default && (
            <Group position="center" pb={20}>
              <Skeleton
                circle
                height={150}
                animate={false}
                style={{
                  margin: "0 auto",
                }}
              />
            </Group>
          )}
          {data.sprites.front_default && (
            <Group position="center" pb={20}>
              <motion.div
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(-0.1)" }}
                initial={{ transform: "scale(0.1)" }}
                key={showShiny ? "shiny" : "default"}
              >
                <Image
                  fit="cover"
                  width={150}
                  height={150}
                  alt={data.name}
                  style={{
                    cursor: data.sprites.front_shiny ? "pointer" : "default",
                  }}
                  src={
                    showShiny
                      ? data.sprites.front_shiny ?? data.sprites.front_default
                      : data.sprites.front_default
                  }
                  onClick={handleImgCLick}
                />
              </motion.div>
            </Group>
          )}
          <Group position="center">
            <Badge size="sm" color="gray" variant="dot">
              {data.order < 1 ? "?" : data.order}
            </Badge>
          </Group>
          <Card.Section className={classes.section}>
            <Group position="center">
              <Text weight={500} lineClamp={1} size="xl">
                {capitalize(data.name)}
              </Text>
            </Group>
          </Card.Section>
          <Card.Section className={classes.section}>
            <Group position="center" spacing="xs">
              {data.types.map(({ type: { name } }: PokeType) => {
                const t = POKEMON_TYPES.find((ptype) => ptype.value === name)
                const tColor = t?.color || "dark"
                return (
                  <Badge
                    key={name}
                    size="lg"
                    variant="gradient"
                    sx={() => ({
                      fontWeight: 600,
                      textTransform: "capitalize",
                    })}
                    gradient={{ from: tColor, to: tColor }}
                  >
                    {name}
                  </Badge>
                )
              })}
            </Group>
          </Card.Section>
          <Card.Section className={classes.section}>
            <Group spacing={30}>
              <Button
                radius="md"
                component="a"
                color="violet"
                variant="light"
                style={{ flex: 1 }}
                onClick={() => modalCallback(data.name)}
                leftIcon={<ListDetails size={16} />}
              >
                Details
              </Button>
            </Group>
          </Card.Section>
        </Card>
      </motion.div>
    </Grid.Col>
  )
}
