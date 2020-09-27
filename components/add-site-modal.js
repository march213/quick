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
  useToast,
  useDisclosure,
} from '@chakra-ui/core'
import { mutate } from 'swr'

import { createSite } from '@/lib/db'
import { useAuth } from '@/lib/auth'

function AddSiteModal({ variantColor = 'gray', text = 'Add Your First Site' }) {
  const initialRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register } = useForm()
  const toast = useToast()
  const auth = useAuth()

  const onCreateSite = (values) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      ...values,
    }
    createSite(newSite)
    mutate('/api/sites', (data) => ({ sites: [...data.sites, newSite] }), false)
    toast({
      title: 'Success!',
      description: "We've added your site",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    onClose()
  }

  return (
    <>
      <Button variantColor={variantColor} onClick={onOpen}>
        {text}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={register({})} name="name" placeholder="My Site" />
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
