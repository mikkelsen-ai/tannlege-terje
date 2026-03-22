import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BOOKING_URL = 'https://bestill.mikkelsen-tannklinikk.no'
export const PHONE = '908 40 482'
export const PHONE_HREF = 'tel:+4790840482'
