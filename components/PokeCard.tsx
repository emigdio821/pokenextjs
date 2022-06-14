import usePokeAPI from "../hooks/usePokeAPI"
import Oops from "./Oops"
import CardLoading from "./CardLoading"
import PokeCardItem from "./PokeCardItem"
import { PokeType } from "../types"

interface PokeCardProps {
  name: string
  pType: string
  modalCallback: () => void
  callback: (typeFound: string) => void
}

export default function PokeCard({
  name,
  pType,
  callback,
  modalCallback,
}: PokeCardProps) {
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
          {pType ? (
            result.types.map((type: PokeType) => {
              if (type.type.name === pType) {
                callback(pType)
                return (
                  <PokeCardItem data={result} modalCallback={modalCallback} />
                )
              }
              return null
            })
          ) : (
            <PokeCardItem data={result} modalCallback={modalCallback} />
          )}
        </>
      )}
    </>
  )
}
