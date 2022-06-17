import { Group, Select, Input } from "@mantine/core"
import { Filter } from "tabler-icons-react"
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
    <Group position="left" spacing="sm">
      <Input
        style={{
          width: 150,
        }}
        radius="lg"
        disabled={isDisabled}
        icon={<Filter size={14} />}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          searchCallback(e.target.value)
        }
        placeholder="By name..."
      />
      <Select
        clearable
        radius="lg"
        data={POKEMON_TYPES}
        placeholder="By type..."
        disabled={isDisabled}
        maxDropdownHeight={400}
        icon={<Filter size={14} />}
        onChange={(value: string) => selectCallback(value)}
        style={{
          width: 150,
        }}
      />
    </Group>
  )
}
