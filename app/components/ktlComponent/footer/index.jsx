import React, { lazy, Suspense } from 'react';

const GlobalFooter = lazy(() => import('@jetbrains/kotlin-web-site-ui/out/components/footer'));
import { ThemeProvider } from '@rescui/ui-contexts';
import { ClientOnly } from '../../clientOnly';

const Footer = (props) => {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        <ThemeProvider theme="dark">
          <GlobalFooter {...props} />
        </ThemeProvider>
      </Suspense>
    </ClientOnly>
  );
};

export default Footer;
