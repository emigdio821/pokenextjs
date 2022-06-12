import { Pagination, Group, Skeleton } from "@mantine/core"
import { useState } from "react"
import Oops from "../components/Oops"
import usePokeAPI from "../hooks/usePokeAPI"
import PokeGrid from "../components/PokeGrid"
import Filters from "../components/Filters"

export default function IndexPage() {
  const [activePage, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>("")
  const [pokeType, setPokeType] = useState<string>("")
  const { result, error } = usePokeAPI({ offset: (activePage - 1) * 12 })

  if (error) return <Oops />

  return (
    <>
      <Group position="left" mb={10}>
        <Filters
          searchCallback={(value: string) => setSearch(value)}
          selectCallback={(value: string) => setPokeType(value)}
        />
        <Pagination
          size="sm"
          color="violet"
          page={activePage}
          onChange={setPage}
          total={Math.ceil(result && result.count / 12)}
        />
      </Group>
      <Skeleton visible={!result}>
        {result?.results && (
          <PokeGrid data={result} search={search} pokeType={pokeType} />
        )}
      </Skeleton>
    </>
  )
}
