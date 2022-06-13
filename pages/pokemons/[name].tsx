interface PokemonDetailProps {
  pokemon: {
    id: number
    name: string
    sprites: {
      front_shiny: string
      front_default: string
    }
    height: number
    weight: number
    types: {
      type: {
        name: string
      }
    }[]
  }
}

interface StaticPaths {
  name: string
}

interface StaticProps {
  params: { name: string }
}

export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await res.json()

  return {
    paths: data.results.map(({ name }: StaticPaths) => ({
      params: { name },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: StaticProps) {
  const {
    params: { name: pName },
  } = context

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`)
  const data = await res.json()

  return {
    props: {
      pokemon: data,
    },
  }
}

export default function PokemonDetail({ pokemon }: PokemonDetailProps) {
  return <div>{pokemon.name}</div>
}
