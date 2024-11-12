import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='flex flex-col h-full'>
			<Header />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
