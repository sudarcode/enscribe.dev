import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Sudar',
  description:
    'Hanyalah Sebuah Blog Berisi Catatan Harian Sudarmanto.',
  href: 'https://enscribe.dev',
  author: 'Sudarmanto',
  locale: 'id-ID',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/work',
    label: 'Work',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/sudarcode',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/enscrbe',
    label: 'Twitter',
  },
  {
    href: 'mailto:admin@sudar.web.id',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
