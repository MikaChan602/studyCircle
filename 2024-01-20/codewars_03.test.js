const inArray = require('./codewars_03')

describe('inArray',
()=>{
    a1 = ["xyz", "live", "strong"]
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    test('inArray A series', function(){
        expect(inArray(a1,a2)).toStrictEqual(["live", "strong"])
    })
})
