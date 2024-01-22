const sum  = require('./init')

test('a=1, b=2 加起來等於 3', function( ){
    expect(sum(1,2)).toBe(3)
 })
 test('a=4, b=2 加起來等於 6', function( ){
    expect(sum(4,2)).toBe(6)
 })