import { Input, Select } from "@mantine/core"
import { Filter, Search } from "tabler-icons-react"
import POKEMON_TYPES from "../constants"

interface FilterProps {
  searchCallback: (value: string) => void
  selectCallback: (value: string) => void
}

export default function Filters({
  searchCallback,
  selectCallback,
}: FilterProps) {
  return (
    <>
      <Input
        radius="lg"
        style={{
          width: 150,
        }}
        icon={<Search size={14} />}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          searchCallback(e.target.value)
        }
        placeholder="Search"
      />
      <Select
        clearable
        radius="lg"
        style={{
          width: 150,
        }}
        data={POKEMON_TYPES}
        icon={<Filter size={14} />}
        placeholder="By type"
        onChange={(value: string) => selectCallback(value)}
      />
    </>
  )
}
