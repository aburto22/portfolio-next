import { useContext } from 'react';
import Header from '../header';
import Footer from '../footer';
import ThemeContext from '../../context/theme_context';
import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${darkTheme && styles.containerDark}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;