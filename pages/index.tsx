import { Group, Select, Text, Grid, ActionIcon } from "@mantine/core"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "tabler-icons-react"
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
        <Group>
          <Text size="sm">Page</Text>
          <Select
            radius="lg"
            disabled={!result}
            style={{ width: "70px" }}
            value={activePage.toString()}
            onChange={(value: string) => setPage(value)}
            data={Array.from(Array(totalPages).keys()).map((i) => ({
              value: (i + 1).toString(),
              label: (i + 1).toString(),
            }))}
          />
          <>
            <Text size="sm">of {!result ? "..." : totalPages}</Text>
            <ActionIcon
              mr="-10px"
              color="violet"
              variant="filled"
              disabled={activePageNumber === 1 || !result}
              onClick={() => setPage((activePageNumber - 1).toString())}
            >
              <ArrowLeft size={16} />
            </ActionIcon>
            <ActionIcon
              color="violet"
              variant="filled"
              disabled={activePageNumber === totalPages || !result}
              onClick={() => setPage((activePageNumber + 1).toString())}
            >
              <ArrowRight size={16} />
            </ActionIcon>
          </>
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
