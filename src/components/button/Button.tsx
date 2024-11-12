import React from 'react'

interface Props {
	value: string | number
	onClick: () => void
}

const Button: React.FC<Props> = ({ value, onClick }) => {
	return (
		<button
			className='p-2 border border-slate-400 rounded-md w-12 md:w-16'
			onClick={onClick}
		>
			{value}
		</button>
	)
}

export default Button
