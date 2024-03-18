const validBraces = require('./codewars_04')

describe('ValidBraces', 
    ()=>{
        const strA = "(){}[]"   // True
        const strB = "([{}])"   // True
        const strC = "(}"       // False
        const strD = "[(])"     // False
        const strE = "[({})](]" // False

        test('strA',()=>{
            expect(validBraces("(){}[]")).toBe(true)
        })

        test('strB',()=>{
            expect(validBraces(strB)).toBe(true)
        })

        test('strC',()=>{
            expect(validBraces(strC)).toBe(false)
        })

        test('strD',()=>{
            expect(validBraces(strD)).toBe(false)
        })
        
        test('strE',()=>{
            expect(validBraces(strE)).toBe(false)
        })
    }
)