import { useContext } from 'react';
import Footer from '../footer';
import ThemeContext from '../../context/theme_context';
import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  Header: JSX.Element;
}

const Layout = ({ children, Header }: LayoutProps) => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${darkTheme && styles.containerDark}`}>
      {Header}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;