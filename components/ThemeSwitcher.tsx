import { useMantineColorScheme, ActionIcon } from "@mantine/core"
import { Sun, MoonStars } from "tabler-icons-react"

export default function ThemeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      size="lg"
      variant="light"
      onClick={() => toggleColorScheme()}
      styles={(theme) => ({
        root: {
          color:
            colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.violet[6],
        },
      })}
    >
      {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  )
}
