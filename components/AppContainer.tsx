import Head from "next/head"
import { Text, Group, Footer, Container } from "@mantine/core"
import Navbar from "./Navbar"

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
      <Navbar />
      <Container mt={80} style={{ minHeight: "calc(100vh - 160px)" }}>
        {children}
      </Container>
      <Footer height={60} p="md" mt={20}>
        <Group position="center" spacing="xl">
          <Text size="sm">Pokedex using Mantine, Nextjs and ♥</Text>
        </Group>
      </Footer>
    </>
  )
}
