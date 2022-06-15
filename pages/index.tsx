import { Group, Select, Grid, ActionIcon } from "@mantine/core"
import { useState } from "react"
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "tabler-icons-react"
import Oops from "../components/Oops"
import usePokeAPI from "../hooks/usePokeAPI"
import PokeGrid from "../components/PokeGrid"
import Filters from "../components/Filters"
import CardLoading from "../components/CardLoading"

export default function IndexPage() {
  const [activePage, setPage] = useState<string>("1")
  const [search, setSearch] = useState<string>("")
  const [pokeType, setPokeType] = useState<string>("")
  const activePageNumber = parseInt(activePage, 10)
  const { result, error } = usePokeAPI({
    offset: (activePageNumber - 1) * 12,
  })
  const totalPages = Math.ceil(result && result.count / 12) || 1

  if (error) return <Oops />

  return (
    <>
      <Group position="left" mb={10}>
        <Filters
          isDisabled={!result}
          searchCallback={(value: string) => setSearch(value)}
          selectCallback={(value: string) => setPokeType(value)}
        />
        <Group spacing="xs">
          <ActionIcon
            size="lg"
            color="violet"
            variant="light"
            onClick={() => setPage("1")}
            disabled={activePageNumber === 1 || !result}
          >
            <ChevronsLeft size={16} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="violet"
            variant="light"
            disabled={activePageNumber === 1 || !result}
            onClick={() => setPage((activePageNumber - 1).toString())}
          >
            <ChevronLeft size={16} />
          </ActionIcon>
          <Select
            radius="lg"
            searchable
            disabled={!result}
            nothingFound="Not found"
            style={{ width: "70px" }}
            value={activePage.toString()}
            onChange={(value: string) => setPage(value)}
            data={Array.from(Array(totalPages).keys()).map((i) => ({
              value: (i + 1).toString(),
              label: (i + 1).toString(),
            }))}
          />
          <ActionIcon
            size="lg"
            color="violet"
            variant="light"
            disabled={activePageNumber === totalPages || !result}
            onClick={() => setPage((activePageNumber + 1).toString())}
          >
            <ChevronRight size={16} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="violet"
            variant="light"
            disabled={activePageNumber === totalPages || !result}
            onClick={() => setPage(totalPages.toString())}
          >
            <ChevronsRight size={16} />
          </ActionIcon>
        </Group>
      </Group>
      {!result ? (
        <Grid py={10}>
          {Array.from(Array(12).keys()).map((i) => (
            <CardLoading key={`${i}-card-loading`} />
          ))}
        </Grid>
      ) : (
        <PokeGrid data={result} search={search} pokeType={pokeType} />
      )}
    </>
  )
}
