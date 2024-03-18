const isValidWalk  = require('./codewars_02')

describe('isValidWalk',
()=>{
    test('isValidWalk 1', function(){
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true)
    })
    test('isValidWalk 2', function(){
        expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false)
    })
    test('isValidWalk 3', function(){
        expect(isValidWalk(['w'])).toBe(false)
    })
    test('isValidWalk 4', function(){
        expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false)
    })
})