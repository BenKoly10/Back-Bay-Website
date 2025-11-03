import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    // SEO & Social sharing metadata
    // Use absolute URLs for social previews (GitHub Pages deployment URL)
    // Note: Update repo/owner if this changes in the future
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Back Bay Music — Back Bay Music - We are back bay blues',
      },
      {
        name: 'description',
        content:
          'Back Bay Music — A southern Delaware band, blending jazz, funk, and blues with youthful energy and polished groove, turning every beach night into a soulful and groovy jam.',
      },
      // Open Graph (Facebook/LinkedIn/Discord/Slack/etc.)
      {
        property: 'og:title',
        content: 'Back Bay Music — Back Bay Music - We are back bay blues',
      } as any,
      {
        property: 'og:description',
        content:
          'Back Bay Music — A southern Delaware band, blending jazz, funk, and blues with youthful energy and polished groove, turning every beach night into a soulful and groovy jam.',
      } as any,
      {
        property: 'og:type',
        content: 'website',
      } as any,
      {
        property: 'og:site_name',
        content: 'Back Bay Music',
      } as any,
      {
        property: 'og:url',
        content: 'https://backbayblues.com/',
      } as any,
      {
        property: 'og:image',
        content: 'https://backbayblues.com/homepage.jpeg',
      } as any,
      // Twitter / X
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Back Bay Music — Back Bay Music - We are back bay blues',
      },
      {
        name: 'twitter:description',
        content:
          'Back Bay Music — A southern Delaware band, blending jazz, funk, and blues with youthful energy and polished groove, turning every beach night into a soulful and groovy jam.',
      },
      {
        name: 'twitter:image',
        content: 'https://backbayblues.com/homepage.jpeg',
      },
      {
        name: 'twitter:url',
        content: 'https://backbayblues.com/',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: 'https://backbayblues.com/',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {process.env.NODE_ENV !== 'production' && (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
