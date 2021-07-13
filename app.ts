// case Function expects objects with numbers

const input = {a: 1, b: 3, c: 3}

const combinator = (someObj: {a: number, b: number}) => {
    return someObj.a + someObj.b
}

type CombinatorImproved = {a: number, b: string}

const combinatorImproved = (someObj:CombinatorImproved) => {
    return someObj.a + someObj.b
}

console.log('result is: ', combinator(input))

console.log('improved result is: ', combinatorImproved(input))
 // end

const last = <T>(arr: Array<T>): T => {
    return arr[arr.length - 1]
}

const elms = [1234,3,42]

const result = last([1234,'3',42])

const resultSt = last<string>(['Bill','George','Will'])

console.log('array last el:', result, resultSt)
