#!/usr/bin/env node

import { createDictonary } from './dictionary'
import { searchWords } from './search'

const EscapeCodeGreen = '\x1b[32m'
const EscapeCodeReset = '\x1b[0m'

export const search = (query: string) => {
  if (query == null || query === '') {
    console.log('en2sw <command>\n\nUsage: en2sw <word>')
    return
  }

  console.log(`Searching English words with Swahili words...\n`)

  const dictionary = createDictonary()
  const searchResultWords = searchWords(query, dictionary)

  searchResultWords.forEach((result, index) => {
    const { en, sw } = result
    const number = index + 1

    console.log(`${number}: ${EscapeCodeGreen}${sw}${EscapeCodeReset} (${en})`)
  })
}

function main() {
  const [, , query] = process.argv
  search(query)
}

main()
