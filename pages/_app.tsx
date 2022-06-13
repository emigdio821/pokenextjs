/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app"
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core"
import { useHotkeys, useLocalStorage } from "@mantine/hooks"
import AppContainer from "../components/AppContainer"

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  useHotkeys([["mod+J", () => toggleColorScheme()]])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
