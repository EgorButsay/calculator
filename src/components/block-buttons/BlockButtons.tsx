'use client'

import React, { SetStateAction, useState } from 'react'
import Button from '../button/Button'

import { MATH_OPERATIONS } from '@/data/arithmetic'
import { evaluate } from 'mathjs'

interface Props {
	value: string | number
	setValue: React.Dispatch<SetStateAction<string | number>>
	setResult: React.Dispatch<SetStateAction<string | null>>
	setError: React.Dispatch<SetStateAction<string | null>>
	symbols: Array<string | number>
	className: string
}

const BlockButtons: React.FC<Props> = ({
	value,
	setValue,
	setResult,
	setError,
	symbols,
	className,
}) => {
	const [isFunctionActive, setIsFunctionActive] = useState(false)

	const handleClick = (val: string | number) => {
		try {
			if (val === MATH_OPERATIONS.AC) {
				setValue('')
				setResult(null)
				setError(null)
				setIsFunctionActive(false)
				return
			}

			if (
				[
					MATH_OPERATIONS.SIN,
					MATH_OPERATIONS.COS,
					MATH_OPERATIONS.TAN,
					MATH_OPERATIONS.LOG,
				].includes(val as string)
			) {
				setValue(prev => prev + `${val}(`)
				setIsFunctionActive(true)
				return
			}

			if (MATH_OPERATIONS.SQUARE === val) {
				const percent = Math.sqrt(value as number)
				setResult(percent.toString())
			}

			if (!isNaN(Number(val)) && isFunctionActive) {
				setValue(prev => prev + val.toString() + ')')
				setIsFunctionActive(false)
				return
			}

			if (isFunctionActive && val === '=') {
				setValue(prev => prev + `)${val.toString()}`)
				setResult(evaluate(`${value.toString()} + ')'`))
				setIsFunctionActive(false)
				return
			}

			if (val === '=') {
				setResult(evaluate(value.toString()))
				setIsFunctionActive(true)
				return
			}

			setValue(prev => prev + val.toString())
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			setError('You have entered incorrect data!')
		}
	}

	return (
		<div className={`grid w-full ${className}`}>
			{symbols.map(value => (
				<Button
					key={value.toString()}
					value={value}
					onClick={() => handleClick(value)}
				/>
			))}
		</div>
	)
}

export default BlockButtons
