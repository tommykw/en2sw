import { createDictonary } from '../src/dictionary'
import { en2sw } from '../src/dictionary/en2sw'

describe('createDictonary()', () => {
  it('should create a dictionary', () => {
    // Arrange
    const expected = en2sw

    // Act
    const dictionary = createDictonary()

    // Assert
    expect(dictionary).toEqual(expected)
  })
})
