import {
  Text,
  Input,
  Group,
  Header,
  Button,
  Container,
  createStyles,
  Notification,
} from "@mantine/core"
import { Book2, Search } from "tabler-icons-react"
import Link from "next/link"
import { useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher"

const useStyles = createStyles(() => ({
  header: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}))

export default function Navbar() {
  const { classes } = useStyles()
  const [searchValue, setSearchValue] = useState("")
  const [showNotification, setShowNotification] = useState(false)

  return (
    <Header height={60} fixed>
      <Container className={classes.header}>
        <Link href="/" passHref>
          <Text
            weight={700}
            style={{
              display: "flex",
              cursor: "pointer",
              userSelect: "none",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Book2 size={20} />
            PokeNext.js
          </Text>
        </Link>
        <Group spacing={6}>
          <Input
            radius="md"
            icon={<Search size={14} />}
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            placeholder="Search a pokemon..."
          />

          <Button
            radius="md"
            color="violet"
            variant="light"
            onClick={() => setShowNotification(true)}
            disabled={!searchValue}
          >
            Search
          </Button>
          {showNotification && (
            <Notification
              radius="md"
              color="violet"
              style={{ height: 36 }}
              onClose={() => setShowNotification(false)}
            >
              Beep boop - coming soon!
            </Notification>
          )}
          <ThemeSwitcher />
        </Group>
      </Container>
    </Header>
  )
}
