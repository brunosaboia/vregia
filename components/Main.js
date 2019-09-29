import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

import { MainContent } from "../content/i18nContent";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        {/** TODO: Transform into map */}
        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">
            {MainContent[this.props.currentLanguage].work.heading}
          </h2>
          <span className="image main">
            {/* <img src="/static/images/pic02.jpg" alt="" /> */}
          </span>
          {MainContent[this.props.currentLanguage].work.content()}
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">
            {MainContent[this.props.currentLanguage].about.heading}
          </h2>
          {/* <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span> */}
          {MainContent[this.props.currentLanguage].about.content()}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">
            {MainContent[this.props.currentLanguage].contact.heading}
          </h2>
          <p>{MainContent[this.props.currentLanguage].contact.content}</p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">
                {MainContent[this.props.currentLanguage].contact.legends[0]}
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">
                {MainContent[this.props.currentLanguage].contact.legends[1]}
              </label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">
                {MainContent[this.props.currentLanguage].contact.legends[2]}
              </label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value={
                    MainContent[this.props.currentLanguage].contact.legends[3]
                  }
                  className="special"
                />
              </li>
              <li>
                <input
                  type="reset"
                  value={
                    MainContent[this.props.currentLanguage].contact.legends[4]
                  }
                />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
};

export default Main;
