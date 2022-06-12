import { useEffect, useState } from "react"
import { AlertCircle } from "tabler-icons-react"
import { Alert, Grid, Group } from "@mantine/core"
import PokeCard from "./PokeCard"
import { capitalize } from "../utils/index"

interface PokeGridProps {
  data: {
    results: [
      {
        name: string
      },
    ]
  }
  search: string
  pokeType: string
}

interface Results {
  name: string
}

export default function PokeGrid({ data, search, pokeType }: PokeGridProps) {
  const typeArr = [] as string[]
  const [typeFound, setTypeFound] = useState<boolean>(false)
  const filteredData = data.results.filter(({ name }) => name.includes(search))

  const pushTypesArray = (pokeTypes: string) => {
    typeArr.push(pokeTypes)
  }

  useEffect(() => {
    if (!typeArr.length) {
      setTypeFound(true)
    } else {
      setTypeFound(false)
    }
  }, [pokeType, typeArr.length, search])

  return (
    <>
      {filteredData.length ? (
        <Grid py={10}>
          {filteredData.map(({ name }: Results) => (
            <PokeCard
              key={name}
              name={name}
              pokeType={pokeType}
              callback={pushTypesArray}
            />
          ))}
        </Grid>
      ) : (
        <Group mb={10}>
          <Alert icon={<AlertCircle size={16} />} color="violet" radius="md">
            Pokemon not found with name: <b>{search}</b>
          </Alert>
        </Group>
      )}
      {typeFound && pokeType && (
        <Group>
          <Alert icon={<AlertCircle size={16} />} color="violet" radius="md">
            Pokemon not found with type: <b>{capitalize(pokeType)}</b>
          </Alert>
        </Group>
      )}
    </>
  )
}
