import Footer from '../footer';
import { useAppSelector } from '../../hooks/use_redux';
import styles from './styles.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  Header: JSX.Element;
  sidebar: boolean;
}

const Layout = ({ children, Header, sidebar = false }: LayoutProps) => {
  const darkTheme = useAppSelector((state) => state.darkTheme);
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
