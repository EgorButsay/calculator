'use client'

import Calculator from '../calculator/Calculator'
import Container from '../container/Container'

const HomePage = () => {
	return (
		<div className='py-10 h-full'>
			<Container className='flex items-center justify-center h-full'>
				<Calculator />
			</Container>
		</div>
	)
}

export default HomePage
