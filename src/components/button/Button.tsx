import React from 'react'

interface Props {
	value: string | number
	onClick: () => void
	customStyle: string
}

const Button: React.FC<Props> = ({ value, onClick, customStyle }) => {
	return (
		<button
			className={`p-2 border border-slate-400 rounded-md w-12 md:w-16 hover:shadow-md transition-all bg-neutral-100 hover:bg-neutral-300 duration-200 font-medium ${customStyle}`}
			onClick={onClick}
		>
			{value}
		</button>
	)
}

export default Button
