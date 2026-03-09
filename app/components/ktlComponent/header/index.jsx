import { lazy, Suspense } from 'react';
import { ClientOnly } from '../../clientOnly';

const GlobalHeader = lazy(() => import('@jetbrains/kotlin-web-site-ui/out/components/header'));

const Header = (props) => {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        <GlobalHeader
          productWebUrl="https://kotlinlang.org"
          hasSearch={false}
          searchConfig={{}}
          {...props}
        />
      </Suspense>
    </ClientOnly>
  );
};

export default Header;
