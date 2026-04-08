import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Update this to your real domain once you buy it!
  const baseUrl = 'https://sattvayogaclasses.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
