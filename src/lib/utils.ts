import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base-aware asset helper that works on GitHub Pages
export function withBase(path: string) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '')
  const p = String(path).replace(/^\/+/, '')
  return `${base}/${p}`
}