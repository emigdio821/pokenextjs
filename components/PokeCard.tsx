import usePokeAPI from "../hooks/usePokeAPI"
import Oops from "./Oops"
import CardLoading from "./CardLoading"
import PokeCardItem from "./PokeCardItem"
import { PokeType } from "../types"

interface PokeCardProps {
  name: string
  filterBy: {
    name?: string
    type?: string
  }
  modalCallback: (pokeName: string) => void
  callback: (typeFound: string) => void
}

export default function PokeCard({
  name,
  filterBy,
  callback,
  modalCallback,
}: PokeCardProps) {
  const { type: filterType } = filterBy
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
          {filterType ? (
            result.types.map((type: PokeType) => {
              if (type.type.name === filterType) {
                callback(filterType)
                return (
                  <PokeCardItem
                    key={`${name}-${type.type.name}`}
                    data={result}
                    modalCallback={modalCallback}
                  />
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
