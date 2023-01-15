import { searchWords } from '../src/search'

describe('searchWords()', () => {
  it('should return search results when passing a query', () => {
    // Arrange
    const query = 'apple'

    const dictionary = {
      grapefruit: 'zabibu',
      coconut: 'nazi',
      'string beans': 'maharagwe ya kamba',
      'green-pepper': 'kijani-pilipili',
      ginger: 'tangawizi',
      watermelon: 'tikiti maji',
      radish: 'figili',
      apple: 'tufaha',
      onion: 'kitunguu',
      soy: 'soya',
      'red pepper': 'pilipili nyekundu',
      corn: 'mahindi',
    }

    const expected = [
      { en: 'apple', sw: 'tufaha' },
      { en: 'grapefruit', sw: 'zabibu' },
      { en: 'green-pepper', sw: 'kijani-pilipili' },
      { en: 'red pepper', sw: 'pilipili nyekundu' },
    ]

    // Act
    const searchResultWords = searchWords(query, dictionary)

    // Assert
    expect(searchResultWords).toEqual(expected)
  })
})
