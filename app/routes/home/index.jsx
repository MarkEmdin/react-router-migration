import { ThemeProvider } from '@rescui/ui-contexts';
import { UsageSection } from '../../sections/usageSection';
import { HeaderSection } from '../../sections/headerSection';
import { StartSection } from '../../sections/startSection';
import { LatestFromKotlinSection } from '../../sections/latestFromKotlinSection';
import { WhyKotlinSection } from '../../sections/whyKotlinSection';
import './index.scss';
import '../../css/grid.scss';

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
