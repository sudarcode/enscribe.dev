import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Sudar Blogger',
  description:
    'Hanyalah Sebuah Blog Berisi Catatan Harian Sudarmanto.',
  href: 'https://www.sudarblogger.com',
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
    label: 'Uplug',
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
    href: 'https://instagram.com/20.22sh',
    label: 'Instagram',
  },
  {
    href: 'mailto:admin@sudarblogger.com',
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
  Instagram: 'lucide:instagram',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
