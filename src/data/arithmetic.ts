export const MATH_OPERATIONS = {
	AC: 'AC',
	SIN: 'sin',
	COS: 'cos',
	TAN: 'tan',
	LOG: 'log',
	SQUARE: '√',
}

export const operatorsBlock: Array<string> = [
	MATH_OPERATIONS.AC,
	'/',
	'*',
	'-',
	'+',
]

export const digitsBlock: Array<string | number> = [
	'(',
	')',
	'%',
	9,
	8,
	7,
	6,
	5,
	4,
	3,
	2,
	1,
	0,
	'.',
	'=',
]

export const mathOperationsBlock: Array<string> = [
	MATH_OPERATIONS.SIN,
	MATH_OPERATIONS.COS,
	MATH_OPERATIONS.TAN,
	MATH_OPERATIONS.LOG,
	MATH_OPERATIONS.SQUARE,
]
