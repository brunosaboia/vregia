import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";

const Header = props => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    {/* <div className="logo"> */}
    <div className="avatar"></div>
    {/* </div> */}
    <div className="content">
      <div className="inner">
        <h1>Vitória Régia</h1>
        <p>Translator based in Brazil</p>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <a
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Intro
          </a>
        </li> */}
        <li>
          <a
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            My Work
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Header;
