import Footer from '@components/footer';
import * as styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
  Header: JSX.Element;
  sidebar?: boolean;
}

const Layout = ({ children, Header, sidebar = false }: LayoutProps) => (
  <styles.Container>
    {Header}
    <main>
      {children}
    </main>
    <Footer sidebar={sidebar} />
  </styles.Container>
);

export default Layout;

Layout.defaultProps = {
  sidebar: false,
};
