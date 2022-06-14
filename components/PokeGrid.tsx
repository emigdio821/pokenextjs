import { useEffect, useState } from "react"
import { AlertCircle } from "tabler-icons-react"
import { Alert, Grid, Group } from "@mantine/core"
import { capitalize } from "../utils/index"
import PokeCard from "./PokeCard"
import { PokeName, PokeFullData } from "../types"
import DetailsModal from "./DetailsModal"

interface PokeGridProps {
  data: PokeFullData
  search: string
  pokeType: string
}

export default function PokeGrid({ data, search, pokeType }: PokeGridProps) {
  const typeArr = [] as string[]
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [typeFound, setTypeFound] = useState<boolean>(false)
  const filteredData = data.results.filter(({ name }) => name.includes(search))

  const pushTypesArray = (pokeTypes: string) => {
    typeArr.push(pokeTypes)
  }

  const modalCallback = () => {
    setIsOpen(!isOpen)
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
      <DetailsModal isOpen={isOpen} modalCallback={modalCallback} />
      {filteredData.length ? (
        <Grid py={10}>
          {filteredData.map(({ name }: PokeName) => (
            <PokeCard
              key={name}
              name={name}
              pType={pokeType}
              callback={pushTypesArray}
              modalCallback={modalCallback}
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
