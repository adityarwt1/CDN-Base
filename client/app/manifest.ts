import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CDN BaseJS - Database Operations via API',
    short_name: 'CDN BaseJS',
    description: 'Perform database operations using simple URL/API calls without any external modules. Pure simplicity for modern developers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/next.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['development', 'database', 'api', 'productivity'],
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
  };
}