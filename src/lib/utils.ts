import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPublicAssetPath(path: string) {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Strip leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get the base URL from Vite (default is '/')
  let base = import.meta.env.BASE_URL || '/';
  
  // Ensure base ends with a slash if it's not empty/dot
  // If base is './', we keep it as is because './path' is valid
  // If base is '/', we keep it as is
  // If base is '/repo', we make it '/repo/'
  if (base !== './' && base !== '/' && !base.endsWith('/')) {
    base += '/';
  }
  
  return `${base}${cleanPath}`;
}
