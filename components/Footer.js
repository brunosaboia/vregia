import PropTypes from "prop-types";

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <p className="copyright">
      &copy; Vitória Régia Santos Ferreira,{" "}
      {props.currentLanguage === "pt-BR"
        ? "Todos os Direitos Reservados"
        : "All Rights Reserved"}
      .
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool
};

export default Footer;
