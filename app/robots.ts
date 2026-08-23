import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Updated to your official domain!
  const baseUrl = 'https://www.sattvayogaclasses.in'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
