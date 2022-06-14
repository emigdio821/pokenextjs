export interface PokeType {
  type: {
    name: string
  }
}

export interface PokeData {
  id: number
  name: string
  sprites: {
    front_shiny: string
    front_default: string
  }
  height: number
  weight: number
  types: PokeType[]
}

export interface PokeName {
  name: string
}

export interface PokeFullData {
  results: [
    {
      name: string
    },
  ]
}
