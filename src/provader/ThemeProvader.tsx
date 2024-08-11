
import { ThemeProvider as ThemeProviderContext } from 'next-themes';

export const ThemeProvader = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProviderContext defaultTheme="dark">{children}</ThemeProviderContext>;
};
