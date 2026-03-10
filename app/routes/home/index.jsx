import { ThemeProvider } from '@rescui/ui-contexts';
import { UsageSection } from '../../sections/usageSection';
import { HeaderSection } from '../../sections/headerSection';
import { StartSection } from '../../sections/startSection';
import { LatestFromKotlinSection } from '../../sections/latestFromKotlinSection';
import { WhyKotlinSection } from '../../sections/whyKotlinSection';
import './index.scss';
import '../../css/grid.scss';

export function meta() {
  return [
    { title: 'Kotlin Programming Language' },
    { property: 'og:title', content: 'Kotlin Programming Language' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kotlinlang.org/' },
    {
      property: 'og:image',
      content: 'https://kotlinlang.org/assets/images/open-graph/general.png',
    },
    { property: 'og:description', content: '' },
    { property: 'og:site_name', content: 'Kotlin' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@kotlin' },
    { name: 'twitter:title', content: 'Kotlin Programming Language' },
    { name: 'twitter:description', content: '' },
    {
      name: 'twitter:image:src',
      content: 'https://kotlinlang.org/assets/images/twitter/general.png',
    },
  ];
}

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
