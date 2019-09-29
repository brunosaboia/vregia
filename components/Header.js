import Logo from "../components/Logo";
import PropTypes from "prop-types";

import { HeaderContent } from "../content/i18nContent";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="avatar"></div>
    <div className="content">
      <div className="inner">
        <Logo />
        <p>
          {HeaderContent[props.currentLanguage].description.line1}
          <br />
          {HeaderContent[props.currentLanguage].description.line2}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {HeaderContent[props.currentLanguage].nav.map(item => (
          <li>
            <a
              onClick={() => {
                props.onOpenArticle(item.pageName);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
