import LandingPage from '../components/landingPage';
import { ShellProvider } from '../Context/shellContext';

export default function Home() {
  return (
    <ShellProvider>
        <LandingPage />
    </ShellProvider>
  );
}
