// sgf operations to be moved to different file
const sgfToArray = (sgf: string) => {
    const positionsStart = sgf.indexOf(';B[') + 1
    const lastBMove = sgf.lastIndexOf(';B[') + 1;
    const lastWMove = sgf.lastIndexOf(';W[') + 1;
    const positionsEnd = lastBMove > lastWMove ? lastBMove : lastWMove;
    const onlyMoves = sgf.substring(positionsStart, positionsEnd).split(';')
    const result = onlyMoves.map((i: string) => {
        return lettersToNumbers(i.substr(2,2))
    })
    console.log(result);
    return result;
}

const lettersToNumbers = (chars: string) => {
    const charCodeALetterShift = 96;
    const boardScaleMultiplier = 13
    const xAxis = (chars.charCodeAt(0) - charCodeALetterShift)*boardScaleMultiplier;
    const yAxis = (chars.charCodeAt(1) - charCodeALetterShift)*boardScaleMultiplier;
    console.log(chars, chars.charCodeAt(0),chars.charCodeAt(1))
    return [xAxis, yAxis];
}

const sgfData = `(;GM[1]FF[4]CA[UTF-8]SZ[19];B[aa];W[sa];B[ss];W[as];B[jj];W[sj];B[aj];W[ja];B[js])`;

const movesArray = sgfToArray(sgfData)
console.log('moves: ', movesArray)

// case Function expects objects with numbers

const input = {a: 1, b: 3}

// setting types directly in the function
const combinator = (someObj: {a: number, b: number}):number => {
    return someObj.a + someObj.b
}

// using type alias to set types
type CombinatorImproved = {a: number, b: number}

const combinatorImproved = (someObj:CombinatorImproved): number | string => {
    return someObj.a + someObj.b
}

console.log('Calculation result is: ', combinator(input))

console.log('improved result is: ', combinatorImproved(input))
 // end

const last = <T>(arr: Array<T>): T => {
    return arr[arr.length - 1]
}

const elms = [1234,3,42]

const result = last([1234,'3',42])

const resultSt = last<string>(['Bill','George','Will', 'Steven'])

console.log('array last el:', result, resultSt)
