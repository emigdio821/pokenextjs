import { Text, Group, Footer, Header, AppShell } from "@mantine/core"
import { Book2 } from "tabler-icons-react"
import Head from "next/head"
import ThemeSwitcher from "./ThemeSwitcher"

interface AppContainerProps {
  children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <>
      <Head>
        <title>PokeNext.js</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width,  maximum-scale=1.0"
        />
      </Head>
      <AppShell
        fixed
        header={
          <Header height={60} p="md">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Group position="apart" spacing="sm">
                <Text
                  weight={600}
                  style={{
                    display: "flex",
                    userSelect: "none",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Book2 size={20} />
                  PokeNext.js
                </Text>
              </Group>
              <ThemeSwitcher />
            </div>
          </Header>
        }
        footer={
          <Footer height={60} p="md">
            <Group position="center" spacing="xl">
              <Text size="sm">Pokedex using Mantine, Nextjs and ♥</Text>
            </Group>
          </Footer>
        }
      >
        {children}
      </AppShell>
    </>
  )
}
