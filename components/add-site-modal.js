import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/core'
import { createSite } from '@/lib/db'

function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const { handleSubmit, register } = useForm()

  const submit = (values) => {
    createSite(values)
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Add your first site</Button>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(submit)}>
          <ModalHeader>Add site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={register({})} name="site_name" placeholder="My Site" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input ref={register({})} placeholder="https://website.com" name="url" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button variantColor="blue" bg="cyan.500" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AddSiteModal
