import { search } from '../src/index'

describe('en2sw', () => {
  it('should show usage when a query is empty', () => {
    // Arrange
    const log = jest.spyOn(console, 'log').mockReturnValue()

    // Act
    search('')

    // Assert
    expect(log).toHaveBeenCalledWith('en2sw <command>\n\nUsage: en2sw <word>')

    log.mockRestore()
  })

  it('should show search results when a query is not empty', () => {
    // Arrange
    const log = jest.spyOn(console, 'log').mockReturnValue()

    // Act
    search('apple')

    // Assert
    expect(log).toHaveBeenCalledWith(
      'Searching English words with Swahili words...\n'
    )
    expect(log).toHaveBeenCalledWith('1: \x1b[32mtufaha\x1b[0m (apple)')

    log.mockRestore()
  })
})
