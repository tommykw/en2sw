import { en2sw } from './dictionary/en2sw'

export type Dictionary = Record<string, string>

export const createDictonary = (): Dictionary => {
  return en2sw
}
