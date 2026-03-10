import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import { ThemeProvider } from '@rescui/ui-contexts';
import './css/styles-v2.scss';
import '@rescui/typography/lib/font-jb-sans-auto.css';
import Header from './components/ktlComponent/header';
import Footer from './components/ktlComponent/footer';

export const links = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  { rel: 'preconnect', href: '//resources.jetbrains.com' },
  { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
  { rel: 'alternate icon', href: '/images/favicon.ico' },
  { rel: 'apple-touch-icon', href: '/images/apple-touch-icon.png' },
  { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/apple-touch-icon-72x72.png' },
  { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/apple-touch-icon-114x114.png' },
  { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/apple-touch-icon-144x144.png' },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5P98');`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider theme="dark">
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
