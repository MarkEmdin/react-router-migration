import { ThemeProvider } from '@rescui/ui-contexts';
import { UsageSection } from '../sections/usageSection';

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <div>
        <UsageSection />
      </div>
    </ThemeProvider>
  );
}
