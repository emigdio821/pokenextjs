import { Input, Select } from "@mantine/core"
import { Filter, Search } from "tabler-icons-react"
import POKEMON_TYPES from "../constants"

interface FilterProps {
  isDisabled: boolean
  searchCallback: (value: string) => void
  selectCallback: (value: string) => void
}

export default function Filters({
  isDisabled,
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
        disabled={isDisabled}
        icon={<Search size={14} />}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          searchCallback(e.target.value)
        }
        placeholder="Search"
      />
      <Select
        clearable
        radius="lg"
        data={POKEMON_TYPES}
        placeholder="By type"
        disabled={isDisabled}
        maxDropdownHeight={400}
        icon={<Filter size={14} />}
        onChange={(value: string) => selectCallback(value)}
        style={{
          width: 150,
        }}
      />
    </>
  )
}
