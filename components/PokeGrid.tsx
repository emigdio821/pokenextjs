import { useEffect, useState } from "react"
import { AlertCircle } from "tabler-icons-react"
import { Alert, Grid, Group, Title } from "@mantine/core"
import { useModals } from "@mantine/modals"
import { capitalize } from "../utils/index"
import PokeCard from "./PokeCard"
import { PokeName, PokeFullData } from "../types"
import DetailsModal from "./DetailsModal"

interface PokeGridProps {
  data: PokeFullData
  filterBy: {
    name?: string
    type?: string
  }
}

export default function PokeGrid({ data, filterBy }: PokeGridProps) {
  const typeArr = [] as string[]
  const [typeFound, setTypeFound] = useState<boolean>(false)
  const { type: filterType, name: filterName } = filterBy
  const filteredData = data.results.filter(({ name }) =>
    name.includes(filterName || ""),
  )
  const modals = useModals()

  const pushTypesArray = (pokeTypes: string) => {
    typeArr.push(pokeTypes)
  }

  const modalCallback = (pokeName: string) =>
    modals.openModal({
      overlayBlur: 3,
      trapFocus: false,
      radius: "lg",
      closeOnClickOutside: true,
      overlayOpacity: 0.7,
      title: <Title order={3}>{capitalize(pokeName)}</Title>,
      children: <DetailsModal name={pokeName} />,
    })

  useEffect(() => {
    if (!typeArr.length) {
      setTypeFound(true)
    } else {
      setTypeFound(false)
    }
  }, [filterType, typeArr.length])

  return (
    <>
      {filteredData.length ? (
        <Grid py={10}>
          {filteredData.map(({ name }: PokeName) => (
            <PokeCard
              key={name}
              name={name}
              filterBy={filterBy}
              callback={pushTypesArray}
              modalCallback={modalCallback}
            />
          ))}
        </Grid>
      ) : (
        <Group mb={10}>
          <Alert icon={<AlertCircle size={16} />} color="violet" radius="md">
            Pokemon not found with name: <b>{filterName}</b>
          </Alert>
        </Group>
      )}
      {typeFound && filterType && (
        <Group>
          <Alert icon={<AlertCircle size={16} />} color="violet" radius="md">
            Pokemon not found with type: <b>{capitalize(filterType)}</b>
          </Alert>
        </Group>
      )}
    </>
  )
}
