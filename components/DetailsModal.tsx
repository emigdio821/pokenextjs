import { LoadingOverlay } from "@mantine/core"
import usePokeAPI from "../hooks/usePokeAPI"
import Oops from "./Oops"
import PokeDetails from "./PokeDetails"
import { PokeName } from "../types"

function DetailsModal({ name }: PokeName) {
  const { result, error } = usePokeAPI({ name })

  if (error) return <Oops />

  return (
    <
      // size="sm"
      // radius="lg"
      // opened={isOpen}
      // overlayBlur={3}
      // trapFocus={false}
      // closeOnClickOutside
      // overlayOpacity={0.7}
      // onClose={onCloseModal}
      // title={<Title order={3}>{capitalize(modalProps.pokeName)}</Title>}
    >
      <LoadingOverlay
        visible={!result}
        loaderProps={{ size: "sm", color: "violet" }}
      />
      <PokeDetails data={result} />
    </>
  )
}

export default DetailsModal
