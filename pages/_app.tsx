/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app"
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core"
import { useState } from "react"
import AppContainer from "../components/AppContainer"

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light")
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))
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
