import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentLanguage = (path: string): 'en' | 'bn' => {
  return path.startsWith('/bn') ? 'bn' : 'en';
};

export const getAlternateLanguage = (lang: 'en' | 'bn'): 'en' | 'bn' => {
  return lang === 'en' ? 'bn' : 'en';
};

export const getAlternateLanguagePath = (path: string): string => {
  let newPath = path;

  if (path.startsWith('/bn')) {
    // Remove '/bn/' from the beginning of the path for Bengali URLs
    newPath = path.slice(3);

    if (newPath === '') newPath = '/';
  } else {
    // Add '/bn/' to the beginning of the path for English URLs
    if (newPath === '/') {
      newPath = '/bn';
    } else {
      newPath = '/bn' + newPath;
    }
  }
  console.log('newPath=', newPath);
  return newPath;
};
