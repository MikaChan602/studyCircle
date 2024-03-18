const digitalRoot  = require('./codewars_01')


describe('測試digitalRoot',
()=>{
    test('digitalRoot 999 to be 9', function(){
        expect(digitalRoot('999')).toBe(9)
    })
    test('digitalRoot 16 to be 7', function(){
        expect(digitalRoot('16')).toBe(7)
    })
    test('digitalRoot', function(){
        expect(digitalRoot('195')).toBe(6)
    })
    test('digitalRoot 16 to be 7', function(){
        expect(digitalRoot('167346')).toBe(9)
    })
    test('digitalRoot 16 to be 7', function(){
        expect(digitalRoot(0)).toBe(0)
    })
})