import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPublicAssetPath(path: string) {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // If the path already has the base prefix, don't add it again
  if (base && cleanPath.startsWith(base + '/')) {
    return cleanPath;
  }
  
  return `${base}${cleanPath}`;
}
