import Header from '../header';
import Footer from '../footer';
import styles from './styles.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout;