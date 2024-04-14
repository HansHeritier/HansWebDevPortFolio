import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';

import { ANALYTICS, SITE } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'skill-icons': [
          'html',
          'css',
          'javascript',
          'react-light',
          'tailwindcss-light',
          'astro',
          'netlify-light',
          'vercel-light',
          'github-light',
          'git',
        ],
        'line-md': [
          'plus-circle',
          'minus-circle'
        ],
        'ph': [
          'plus-circle-light',
          'minus-circle-light',
          'storefront-light',
          'users-light',
          'buildings-light',
          'truck-light',
          'heart-light',
          'tent-light',
          'messenger-logo-light',
          'linkedin-logo-light',
          'codesandbox-logo-light',
          'rocket-launch-light',
          'arrows-in-cardinal-light',
          'devices-light',
          'key-light',
          'cursor-click-light',
          'note-pencil-light',
          'certificate-light',
          'crown-light',
          'shooting-star-light',
          'coins-light',
          'drop-light',
          'wind-light',
          'chat-circle-light',
          'calendar-light',
          'google-logo-light',
          'lightbulb-filament-light',


        ]
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    tasks(),
  ],

  image: {
    service: squooshImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
