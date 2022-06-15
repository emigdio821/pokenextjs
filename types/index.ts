export interface PokeType {
  type: {
    name: string
  }
}

export interface PokeAbilities {
  ability: {
    name: string
  }
}

export interface PokeData {
  id: number
  name: string
  order: number
  sprites: {
    front_shiny: string
    front_default: string
    back_default: string
  }
  height: number
  weight: number
  types: PokeType[]
  abilities: PokeAbilities[]
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
