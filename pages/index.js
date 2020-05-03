import Head from "next/head";
import stylesheet from "styles/main.scss";

import LanguagePicker from "../components/LanguagePicker";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { IndexPageContent } from "../content/i18nContent";

const GA_TRACKING_ID = 'UA-91416150-4';

const FAVICON_BASE64 = 'data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAmKisAhpWYAKGoowBgbHAAjZeeABgdIABndHYAaHR2AKSrvgBpdXkAgYuEACAgIABqdXkAlZ6hACIhIwCWmKoAIyEjAHyInwBucosAJSUmAConIwCussoAJisvAE1XVwATGBsAiZWZABUZHgCfqLYAoai2AFVnSAAaHSEAHBweAGZxdwCNk64AZnJ6AGJ2fQBpdnQAa3Z0AGt3dwB7i5cAHyQkAGx4egBLTEkAODgyALqxpABufYAAEhITAKCinAAnKCcAqrPOADY8RwCxuMIAsbbFABcWFgCGlp0AsLnOAIqSowAaFxkALy4wALS71AAICAgAY3J7ALO81wC3u9QAq6yoAGh0eABpdHgAbnZ1ADQ4PAC7w9oAVWF2ALSyqACrs70At7GlAL3E3QCcop0Av8baAKutzwCco6AAlqG1AHF/fgBvgIEAr7fAACgoKACIlJgAXm12ABcaGgACBwYApqejACgrOgCco8QAfoV+AB0bHQCQnJ4AZXN/AGp2dgCmrb4AlJ2hAGt1fAB9ipYAkZywAJOXswALDRgAbHCIACMjIwBvenkAMjpDACUjIwCqrsoAIygpAK20wQCss8cAAQIKAGBngAAWGhsAqaahAIyYnABaWFQAtbrTAGNxegBmcnQAZ3N3AGh0egBrd3EAGyAtAGlrjACnloQAP01hAGl5gAAxN0QAbXh9ALywmwAhIy0AvsXZAICOmgCqm4oAhYiaABIREwAQFRYAKScnAKuz0QCutc4AGhcTAGRsbACaqMMAhpWvALC71wAcGx8AZ3RyABweHwBpdHIAubrUAB8eHwCjqcYAaXZ4AMLCvwB6iJsAIiIiAG15eABbY2QAOjU2AA4QEQCVmbIAmZesAG58eAAkIyUAcH17ABIRFABJTF8ArbTDAJShuACwttIAKS0xABUYIACco74AX292AAMHCQBhbnwALDE0AHBsZABmcnYAZXF8ABofIwB3fqIAaXN5ALm91QBndHwAjpiwAGx2cABsdHMAHSIjAIKHkACmrMcAISQpAA0RFQB/jZkADhEVAL3F2wBsfn8AExASAJGivACDk5kAKCcpALC2wQApJykAcnSXAGNrawAWGBgAKi0yAAIHCgAZGxgAdn2XABkaHgBRWGkAoam/AGhxdABodHQAanR0AEVKSQAeIiQADAoTABAPEAAgJyoAv8TZACYmJwCUoLcAb36AAGh8lQCDk5oAKioqADpARwAUFx8AfX53AAMHCwCKl68AaHF1ABogHwCkrboAaHN7AJqalACSir4AkpupACQjHwBFTlYAbXl7AKitzACXj8QAXltzAHJ7eACvmoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Sge0ek8x+d/ZGAIm78zSH4w4Fyn3Zi2Ru006hwdy26Hs2050ouJfJwbqVI48U/4g3W+Di5yEIFx45Han++kaSwqGKXC29zTuzE/ZlsvUKZJ6BqgH8GoZc328KoKS+LGR3NWzKHQfU31wGyQ6w1RLUBYRJ2TsrerWkqZjPMEAYACThYrC+WED9Y7PpJq5DYjDWHmAJXU9xKuoqPIMoYnsXRdAzoFrRWXuWchcHfDY1VUGckTilk7hUzfb7C1Xj2vtHl6rMTVxYVFdhHeIrrutCSUX3jsV4g3jeHKILhCmgaWJdnXF8+Oa2hTYgwJQQfYe7xDvc6PNRTyKfSCnikmJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='

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
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
            <title>{IndexPageContent[this.state.currentLanguage].title}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no"
            ></meta>
            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
              rel="stylesheet"
            />
            <link rel="shortcut icon"
            href={`${FAVICON_BASE64}`}
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
