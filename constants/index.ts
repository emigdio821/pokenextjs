const TYPES = [
  { value: "normal", label: "Normal", color: "#A8A77A" },
  { value: "fire", label: "Fire", color: "#EE8130" },
  { value: "fighting", label: "Fighting", color: "#C22E28" },
  { value: "poison", label: "Poison", color: "#A33EA1" },
  { value: "electric", label: "Electric", color: "#F7D02C" },
  { value: "flying", label: "Flying", color: "#A98FF3" },
  { value: "ice", label: "Ice", color: "#96D9D6" },
  { value: "bug", label: "Bug", color: "#A6B91A" },
  { value: "psychic", label: "Psychic", color: "#F95587" },
  { value: "rock", label: "Rock", color: "#B6A136" },
  { value: "dragon", label: "Dragon", color: "#6F35FC" },
  { value: "ghost", label: "Ghost", color: "#735797" },
  { value: "dark", label: "Dark", color: "#705746" },
  { value: "steel", label: "Steel", color: "#B7B7CE" },
  { value: "fairy", label: "Fairy", color: "#D685AD" },
  { value: "water", label: "Water", color: "#6390F0" },
  { value: "grass", label: "Grass", color: "#7AC74C" },
  { value: "ground", label: "Ground", color: "#E2BF65" },
]

const POKEMON_TYPES = TYPES.sort((a, b) => {
  if (a.value < b.value) {
    return -1
  }
  if (a.value > b.value) {
    return 1
  }
  return 0
})

export default POKEMON_TYPES
