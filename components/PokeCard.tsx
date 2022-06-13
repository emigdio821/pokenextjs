import usePokeAPI from "../hooks/usePokeAPI"
import Oops from "./Oops"
import CardLoading from "./CardLoading"
import PokeCardItem from "./PokeCardItem"

interface PokeCardProps {
  name: string
  pokeType: string
  callback: (typeFound: string) => void
}

interface PokeType {
  type: {
    name: string
  }
}

export default function PokeCard({ name, pokeType, callback }: PokeCardProps) {
  const { result, error } = usePokeAPI({ name })

  if (error) return <Oops />

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!result ? (
        <CardLoading />
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {pokeType ? (
            result.types.map((type: PokeType) => {
              if (type.type.name === pokeType) {
                callback(pokeType)
                return <PokeCardItem data={result} />
              }
              return null
            })
          ) : (
            <PokeCardItem data={result} />
          )}
        </>
      )}
    </>
  )
}
