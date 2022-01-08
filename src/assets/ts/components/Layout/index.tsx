import { ReactComponent as SvgSymbol } from '../../../../../dist/assets/images/svg/symbol.svg';
import Header from '../Header/index';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <SvgSymbol />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
