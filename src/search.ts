import Fuse from 'fuse.js'
import { Dictionary } from './dictionary'

export type SearchResult = {
  en: string
  sw: string
}

export const searchWords = (
  query: string,
  dictionary: Dictionary
): SearchResult[] => {
  const searchOptions = {
    includeScore: true,
  }

  const fuse = new Fuse(Object.keys(dictionary), searchOptions)

  const enWords = fuse
    .search(query)
    .sort((a, b) => (a.score ?? 0) - (b.score ?? 0))
    .map((result) => result.item)
    .slice(0, 5)

  return enWords.map((enWord) => {
    const swWord = dictionary[enWord]
    return { en: enWord, sw: swWord }
  })
}
