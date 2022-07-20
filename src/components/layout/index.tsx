import { useEffect, useContext } from 'react';
import Footer from '@components/footer';
import DarkThemeContext from '@context/dark_theme_context';
import * as styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
  Header: JSX.Element;
  sidebar?: boolean;
}

const Layout = ({ children, Header, sidebar = false }: LayoutProps) => {
  const { toggleDarkTheme } = useContext(DarkThemeContext);

  useEffect(() => {
    const doesUsePrefersDarkTheme = (): boolean => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        return savedTheme === 'dark';
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    if (doesUsePrefersDarkTheme()) {
      toggleDarkTheme();
    }
  }, [toggleDarkTheme]);

  return (
    <styles.Container>
      {Header}
      <main>
        {children}
      </main>
      <Footer sidebar={sidebar} />
    </styles.Container>
  );
};

export default Layout;

Layout.defaultProps = {
  sidebar: false,
};
