import Container from '../container/Container'

const Header = () => {
	return (
		<header className='h-28 flex items-center border-b border-slate-300'>
			<Container>
				<p className='text-center text-4xl'>Calculator</p>
			</Container>
		</header>
	)
}

export default Header
