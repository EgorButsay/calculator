import React from 'react'

interface Props {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
	return (
		<div className={`w-full max-w-7xl px-8 mx-auto  ${className}`}>
			{children}
		</div>
	)
}

export default Container
