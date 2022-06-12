import useSWR from "swr"

interface PokeAPIProps {
  name?: string
  offset?: number
}

const PAGE_LIMIT = 12
const API_URL = "https://pokeapi.co/api/v2/pokemon"
const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function usePokeAPI({ name, offset = 0 }: PokeAPIProps) {
  const uri = name
    ? `${API_URL}/${name}`
    : `${API_URL}?limit=${PAGE_LIMIT}&offset=${offset}`
  const { data: result, error } = useSWR(uri, fetcher)

  return { result, error }
}
