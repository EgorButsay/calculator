'use client'

import { useState } from 'react'
import BlockButtons from '../block-buttons/BlockButtons'

import {
	digitsBlock,
	mathOperationsBlock,
	operatorsBlock,
} from '@/data/arithmetic'

const Calculator = () => {
	const [value, setValue] = useState<string | number>('')
	const [result, setResult] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)

	return (
		<div className='my-auto w-[500px] border border-slate-500 p-3 rounded-lg'>
			<div className='w-full p-4 border border-slate-400 rounded-md mb-5 relative'>
				{result && (
					<p className='absolute top-0 right-4 text-xs text-gray-600'>
						{value}=
					</p>
				)}
				<input
					className='w-full text-right text-xl'
					type='text'
					value={result ? result : value}
					readOnly
				/>
				{error && (
					<p className='text-red-600 absolute bottom-0 left-4 text-xs'>
						{error}
					</p>
				)}
			</div>
			<div className='grid grid-cols-[1fr_2fr_1fr] gap-4'>
				<BlockButtons
					value={value}
					setValue={setValue}
					setResult={setResult}
					setError={setError}
					className='gap-2 justify-items-end mathOperationsBlock'
					symbols={mathOperationsBlock}
				/>
				<BlockButtons
					value={value}
					setValue={setValue}
					setResult={setResult}
					setError={setError}
					className='grid-cols-3 gap-2 digitsBlock'
					symbols={digitsBlock}
				/>
				<BlockButtons
					value={value}
					setValue={setValue}
					setResult={setResult}
					setError={setError}
					className='gap-2 operatorsBlock'
					symbols={operatorsBlock}
				/>
			</div>
		</div>
	)
}

export default Calculator
