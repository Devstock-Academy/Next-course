'use server'
import { revalidateTag, unstable_cache } from 'next/cache'

import { BlogEntry } from './types'
const entries: BlogEntry[] = []

function getEntriesFromMemory(): Promise<BlogEntry[]> {
  return Promise.resolve(entries)
}

export const getEntries = unstable_cache(
  getEntriesFromMemory,
  ['entries-list'],
  {
    tags: ['blog-entry'],
  }
)

export async function addEntry(entry: BlogEntry) {
  entries.push(entry)
  revalidateTag('blog-entry')
}
