const getDigitsOfNumber = require('./getDigitsOfNumber.js');

describe('getNumberOfDigit', () => {
  test('Корректное значение', () => {
    expect(getDigitsOfNumber(458)).toEqual({'unit':8, 'dozens':5, 'hundreds':4})
  })
  test('Меньше корректного', () => {
    expect(getDigitsOfNumber(-1)).toEqual({})
  })
  test('Больше корректного', () => {
    expect(getDigitsOfNumber(1000)).toEqual({})
  })
  test('Нижняя граница корректного', () => {
    expect(getDigitsOfNumber(0)).toEqual({'unit':0, 'dozens':0, 'hundreds':0})
  })
  test('Верхняя граница корректного', () => {
    expect(getDigitsOfNumber(999)).toEqual({'unit':9, 'dozens':9, 'hundreds':9})
  })
  test('Текстовые данные', () => {
    expect(getDigitsOfNumber('hundred')).toEqual({})
  })
  test('нецелое число', () => {
    expect(getDigitsOfNumber(34.56)).toEqual({})
  })
})