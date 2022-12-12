import { Box, Center } from '@chakra-ui/react'
import Head from 'next/head'
import ImageGallery from 'react-image-gallery'

const images = [
	{ original: 'chesterfield.webp', description: 'Chesterfield White' },
	{ original: 'camel-natural-white.webp', description: 'Camel Natural Flavor White' },
	{ original: 'winston-white.webp', description: 'Winston White' },
	{ original: 'select-silver.webp', description: 'Select Silver' },
	{ original: 'american-spirit.webp', description: 'American Spirit' },
	{ original: 'camel-silver.webp', description: 'Camel Silver' },
]

export default function Home() {
	return (
		<Box h='full' w='full'>
			<Head>
				<title>Light cigarettes gallery</title>
				<meta name='description' content='Lucky shoping' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Center data-block='center' h='full' w='full'>
				<ImageGallery
					items={images}
					showThumbnails={false}
					showNav={false}
					slideInterval={1000}
					showFullscreenButton={false}
					showPlayButton={false}
					showBullets={false}
					slideDuration={200}
					showIndex
					infinite={false}
				/>
			</Center>
		</Box>
	)
}
