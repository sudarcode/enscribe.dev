import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

import expressiveCode from 'astro-expressive-code'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import rehypeDocument from 'rehype-document'

import tailwindcss from '@tailwindcss/vite'

import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://enscribe.dev',
  integrations: [expressiveCode(), mdx(), react(), sitemap(), icon(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 1234,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeDocument,
        {
          css: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeHeadingIds,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: 'vitesse-dark',
        },
      ],
    ],
    remarkPlugins: [remarkMath, remarkEmoji],
  },
  redirects: {
    // v1.0.0 -> v3.0.0
    '/post/penanggungan-mojokerto':
      '/blog/gunung-penanggungan',
    '/post/sh-terate':
      '/blog/bagian-dari-sh-terate/',
    '/post/pantai-telaga':
      '/blog/pantai-dermaga',
    '/post/makam-mbah-jabbar-tuban':
      '/blog/tuban/makam-aljabbar-tuban',
    
    // v2.0.0 -> v3.0.0
    '/blog/actf-2023/gcd-query': '/blog/actf-2023-gcd-query',
    '/blog/sekaictf-2023/azusawas-gacha-world': '/blog/azusawas-gacha-world',
    '/blog/byuctf-2022/osint-compilation':
      '/blog/byuctf-2022-osint-compilation',
    '/blog/dhhutc-2022/port-authority': '/blog/dhhutc-2022-port-authority',
    '/blog/idekctf-2023/nmpz': '/blog/idekctf-2023-nmpz',
    '/blog/mhsctf-2023/matchmaker': '/blog/mhsctf-2023-matchmaker',
    '/blog/picoctf-2022/beginners-compilation':
      '/blog/picoctf-2022-beginners-compilation',
    '/blog/picoctf-2022/buffer-overflow': '/blog/picoctf-2022-buffer-overflow',
    '/blog/sekaictf-2022/forensics-writeup-compilation':
      '/blog/sekaictf-2022-forensics-compilation',
    '/blog/shctf-2022/compilation': '/blog/shctf-2022-compilation',
    '/blog/wolvctf-2023/wannaflag': '/blog/wolvctf-2023-wannaflag',
  },
})
