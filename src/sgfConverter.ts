export const sgfToArray = (sgf: string) => {
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

