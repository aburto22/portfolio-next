import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout;