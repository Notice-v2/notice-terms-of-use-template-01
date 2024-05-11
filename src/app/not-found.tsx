'use client'

import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Custom404() {
	const router = useRouter()

	useEffect(() => {
		router.push('/')
	}, [])

	return (
		<Flex flexDirection="column" alignItems="center" justifyContent="center" h="100vh" pb="32">
			<Heading size="4xl" color="slate.900" fontWeight="extrabold">
				404
			</Heading>
			<Text mt="2" fontSize="2xl" color="slate.700" fontWeight="medium">
				Notice Not Found
			</Text>
			<Text mt="4" fontSize="lg" color="slate.500" fontWeight="normal">
				The page requested could not be found on the server!
			</Text>
		</Flex>
	)
}
