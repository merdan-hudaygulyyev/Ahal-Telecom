import TopNavbar from '../TopNav/TopNavbar'
import PropTypes from "prop-types";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="box-border overflow-x-hidden overflow-y-auto">
        <TopNavbar />
        {children}
    </div>
  );
};

export default Layout;
Layout.prototype = {
  children: PropTypes.element.isRequired,
};
