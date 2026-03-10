import { ThemeProvider } from '@rescui/ui-contexts';
import { UsageSection } from '../sections/usageSection';
import { HeaderSection } from '../sections/headerSection';
import { StartSection } from '../sections/startSection';
import { LatestFromKotlinSection } from '../sections/latestFromKotlinSection';
import { WhyKotlinSection } from '../sections/whyKotlinSection';

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <div>
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
