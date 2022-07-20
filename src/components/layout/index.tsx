import { useEffect } from 'react';
import Footer from '@components/footer';
import { useAppSelector, useAppDispatch } from '@hooks/use_redux';
import { setTheme } from '@slices/dark_theme';
import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  Header: JSX.Element;
  sidebar?: boolean;
}

const Layout = ({ children, Header, sidebar = false }: LayoutProps) => {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTheme = (): boolean => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        return savedTheme === 'dark';
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    dispatch(setTheme(getTheme()));
  }, [dispatch]);

  return (
    <div className={`${styles.container} ${darkTheme && styles.containerDark}`}>
      {Header}
      <main>
        {children}
      </main>
      <Footer sidebar={sidebar} />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  sidebar: false,
};
