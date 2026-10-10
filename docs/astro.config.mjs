import { rehypeHeadingIds, unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jmuelbert.github.io/jm-homebrew-qt-installer',
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeHeadingIds],
    }),
  },
  integrations: [
    starlight({
      title: 'jm-homebrew-qt-installer',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
        alt: 'jmuelbert Logo',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/' },
            { label: 'Getting Started', link: '/getting-started/' },
          ],
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        de: { label: 'Deutsch', lang: 'de' },
        es: { label: 'Español', lang: 'es' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jmuelbert/jm-homebrew-qt-installer',
        },
      ],
      credits: true,
      lastUpdated: true,
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    sitemap(),
    mdx(),
  ],
});
