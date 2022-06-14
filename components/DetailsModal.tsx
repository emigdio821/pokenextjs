import { Modal } from "@mantine/core"
import React from "react"

interface DetailsModalProps {
  isOpen: boolean
  modalCallback: () => void
}

function DetailsModal({ isOpen, modalCallback }: DetailsModalProps) {
  return (
    <Modal
      size="lg"
      opened={isOpen}
      overlayBlur={3}
      closeOnClickOutside
      overlayOpacity={0.7}
      onClose={modalCallback}
      title="Pokemon Details"
    >
      Details comming soon!
    </Modal>
  )
}

export default DetailsModal
