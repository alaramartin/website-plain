import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://me.alaramartin.com',
    },
    {
      url: 'https://me.alaramartin.com/projects',
    },
    {
      url: 'https://me.alaramartin.com/contact',
    },
  ]
}