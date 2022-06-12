import { motion } from "framer-motion"
import {
  Badge,
  Image,
  Card,
  Group,
  Text,
  Title,
  Skeleton,
  Grid,
} from "@mantine/core"
import usePokeAPI from "../hooks/usePokeAPI"
import Oops from "./Oops"
import { capitalize } from "../utils"
import POKEMON_TYPES from "../constants"

interface PokeCardProps {
  name: string
  pokeType: string
  callback: (typeFound: string) => void
}

interface PokeType {
  type: {
    name: string
  }
}

interface PCardProps {
  data: {
    id: number
    sprites: {
      front_default: string
    }
    height: number
    weight: number
    types: PokeType[]
  }
  pokeName: string
}

function PCard({ data, pokeName }: PCardProps) {
  return (
    <Grid.Col xs={6} sm={4} lg={3} xl={2}>
      <motion.div
        layout
        initial={{ y: 20, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0.2 }}
      >
        <Card
          shadow="sm"
          p="lg"
          radius="lg"
          withBorder
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
          <Skeleton visible={!data} radius={!data ? "lg" : undefined}>
            <Skeleton
              radius="xl"
              animate={false}
              visible={!data.sprites.front_default}
            >
              <Group position="center">
                <Image
                  fit="cover"
                  width={150}
                  height={150}
                  alt={pokeName}
                  src={data.sprites.front_default}
                />
              </Group>
            </Skeleton>
            <Group position="center" my={10}>
              <Badge size="sm" color="gray" variant="dot">{`${data.id}`}</Badge>
            </Group>
            <Group position="apart">
              <Title order={4}>{pokeName}</Title>
            </Group>
            <Text size="sm">
              {pokeName} is a Pokemon that is <b>{data.height / 10}m</b> tall
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
        </Card>
      </motion.div>
    </Grid.Col>
  )
}

export default function PokeCard({ name, pokeType, callback }: PokeCardProps) {
  const { result, error } = usePokeAPI({ name })
  const pokeName = capitalize(name)

  if (error) return <Oops />

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!result ? (
        <Grid.Col xs={6} sm={4} lg={3} xl={2}>
          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Skeleton
              height={80}
              circle
              mb="xl"
              style={{
                margin: "0 auto 20px auto",
              }}
            />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </Card>
        </Grid.Col>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {pokeType ? (
            result.types.map((type: PokeType) => {
              if (type.type.name === pokeType) {
                callback(pokeType)
                return <PCard key={name} data={result} pokeName={pokeName} />
              }
              return null
            })
          ) : (
            <PCard key={name} data={result} pokeName={pokeName} />
          )}
        </>
      )}
    </>
  )
}
