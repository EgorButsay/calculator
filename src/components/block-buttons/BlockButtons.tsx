'use client'

import React, { SetStateAction } from 'react'
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
	const handleClick = (val: string | number) => {
		try {
			if (val === MATH_OPERATIONS.AC) {
				setValue('')
				setResult(null)
				setError(null)
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
				setValue(prev => `${prev}${val}(`)
				return
			}

			if (MATH_OPERATIONS.SQUARE === val) {
				const result = Math.sqrt(Number(value))
				setValue(`${MATH_OPERATIONS.SQUARE}${value}`)
				setResult(result.toString())
				return
			}

			if (val === '=') {
				const needsClosingBracket = ['sin(', 'cos(', 'tan(', 'log('].some(
					func => value.toString().startsWith(func)
				)

				console.log('needsClosingBracket', needsClosingBracket)

				const finalExpression = needsClosingBracket ? `${value})` : value
				setValue(finalExpression)
				const evaluatedResult = evaluate(finalExpression.toString())
				setResult(evaluatedResult.toString())
				return
			}

			setValue(prev => prev + val.toString())
		} catch (e) {
			console.error(e)
			setError('You have entered incorrect data!')
		}
	}

	return (
		<div className={`grid w-full ${className}`}>
			{symbols.map((symbol, index) => {
				let customStyle = ''
				if (className.includes('mathOperationsBlock')) {
					customStyle = 'bg-neutral-200 '
				} else if (className.includes('digitsBlock') && index < 3) {
					customStyle = 'bg-neutral-200 '
				} else if (
					className.includes('digitsBlock') &&
					index === symbols.length - 1
				) {
					customStyle = 'bg-blue-600 text-white'
				} else if (className.includes('operatorsBlock')) {
					customStyle = 'bg-neutral-200 '
				}

				return (
					<Button
						key={symbol.toString()}
						value={symbol}
						onClick={() => handleClick(symbol)}
						customStyle={customStyle}
					/>
				)
			})}
		</div>
	)
}

export default BlockButtons
