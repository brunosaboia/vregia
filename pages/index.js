import Head from "next/head";
import stylesheet from "styles/main.scss";

import LanguagePicker from "../components/LanguagePicker";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { IndexPageContent } from "../content/i18nContent";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: "en-US",
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading"
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentDidMount() {
    // const navigatorLang = window.navigator.language;
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" /* currentLanguage: navigatorLang */ });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleChangeLanguage(newLanguage) {
    this.setState({ currentLanguage: newLanguage });
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ""
      });
    }, 350);
  }
  render() {
    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? "is-article-visible" : ""
        }`}
      >
        <div>
          <Head>
            <title>{IndexPageContent[this.state.currentLanguage].title}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no"
            ></meta>
            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
              rel="stylesheet"
            />
          </Head>

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <div id="wrapper">
            <LanguagePicker
              currentLanguage={this.state.currentLanguage}
              timeout={this.state.timeout}
              onChangeLanguage={this.handleChangeLanguage}
            />
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
              currentLanguage={this.state.currentLanguage}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              currentLanguage={this.state.currentLanguage}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer
              timeout={this.state.timeout}
              currentLanguage={this.state.currentLanguage}
            />
          </div>

          <div id="bg" />
        </div>
      </div>
    );
  }
}

export default IndexPage;
