import { ReactComponent as SvgSymbol } from '../../../../../dist/assets/images/svg/symbol.svg';
import Header from '../Header/index';

const Layout = ({ children }) => (
  <>
    <SvgSymbol />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
