import { useContext } from 'react';
import Footer from '../footer';
import ThemeContext from '../../context/theme_context';
import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  Header: JSX.Element;
  sidebar?: boolean;
}

const Layout = ({ children, Header, sidebar }: LayoutProps) => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${darkTheme && styles.containerDark}`}>
      {Header}
      <main>
        {children}
      </main>
      <Footer sidebar={sidebar} />
    </div>
  )
}

Layout.defaultProps = {
  sidebar: false,
}

export default Layout;