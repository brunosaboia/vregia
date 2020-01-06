export const IndexPageContent = {
  "pt-BR": {
    title:
      "Tradutora | Professora de Português | Brasil, Ceará | Vitória Régia"
  },
  "en-US": {
    title:
      "Translator | Portuguese Teacher | Based in Brazil | Vitória Régia"
  }
};

export const HeaderContent = {
  "pt-BR": {
    description: {
      line1: "Tradutora | Professora de Português",
      line2: "Brasil, Ceará"
    },
    nav: [
      { label: "Meu Trabalho", pageName: "work" },
      { label: "Sobre Mim", pageName: "about" },
      { label: "Contato", pageName: "contact" }
    ]
  },
  "en-US": {
    description: {
      line1: "Translator | Portuguese Teacher",
      line2: "Based in Brazil"
    },
    nav: [
      { label: "My Work", pageName: "work" },
      { label: "About Me", pageName: "about" },
      { label: "Contact", pageName: "contact" }
    ]
  }
};

export const MainContent = {
  "pt-BR": {
    work: {
      heading: "Meu Trabalho",
      content: () => (
        // Has to be function to enable text styling
        <>
          <p>
            <ul>
              <li>
                Tradução
                <ul>
                  <li>Inglês/Francês para Português Brasileiro</li>
                </ul>
              </li>
              <li>
                Aulas de Português Brasileiro para estrangeiros
                <ul>
                  <li>Ministradas em Inglês/Francês</li>
                  <li>Foco na áerea empresarial</li>
                </ul>
              </li>
            </ul>
          </p>
          <strong>Entre em contato para saber mais!</strong>
        </>
      )
    },
    about: {
      heading: "Sobre Mim",
      content: () => (
        <>
          <p>
            Graduada em Letras-Português e mestra em Linguística pela
            &nbsp;
            <a href="http://ufc.br">Universidade Federal do Ceará</a>
            .
            Atuo como professora de língua portuguesa, tradutora e escritora.
            Também sou autora dos livros de poesia
            &nbsp;
            <a href="http://www.literatsi.com.br/noticia/lancamento-do-livro-partida-de-nao-dizeres-de-vitoria-regia/">Partidas de Não Dizeres (2015)</a>
            &nbsp;
            e
            &nbsp;
            <a href="https://www.editorapatua.com.br/produto/8696/nautico-de-vitoria-regia">Náutico (2018)</a>
            .
          </p>
          <strong>"As fronteiras da minha linguagem são as fronteiras do meu universo" &mdash; Ludwig Wittgenstein</strong>
        </>
      )
    },
    contact: {
      heading: "Contato",
      content:
        "Precisa entrar em contato comigo? Preencha o formulário abaixo e retornarei assim que possível. Obrigada!",
      labels: {
        name: "Seu nome:",
        email: "Seu email:",
        message: "Sua mensagem",
        send: "Enviar",
        reset: "Limpar"
      }
    }
  },
  "en-US": {
    work: {
      heading: "My Work",
      content: () => (
        // Has to be function to enable text styling
        <>
          <p>
            <ul>
              <li>
                Translation
                <ul>
                  <li>English/French to Brazilian Portuguese</li>
                </ul>
              </li>
              <li>
                Brazilian Portuguese classes to foreigners
                <ul>
                  <li>Classes are taught in English or French</li>
                  <li>Focused on corporate language</li>
                </ul>
              </li>
            </ul>
          </p>
          <strong>Send me a message to know more!</strong>
        </>
      )
    },
    about: {
      heading: "About Me",
      content: () => (
        <>
          <p>
            Received a degree in Literature and a MSc in Linguistics from
            &nbsp;
            <a href="http://ufc.br">Universidade Federal do Ceará</a>
            .
            I am a Brazilian Portuguese teacher, translator and write.
            I wrote the poetry books
            &nbsp;
            <a href="http://www.literatsi.com.br/noticia/lancamento-do-livro-partida-de-nao-dizeres-de-vitoria-regia/">Partidas de Não Dizeres (2015)</a>
            &nbsp;
            and
            &nbsp;
            <a href="https://www.editorapatua.com.br/produto/8696/nautico-de-vitoria-regia">Náutico (2018)</a>
            .
          </p>
          <strong>"The limits of my language are the limits of my universe" &mdash; Ludwig Wittgenstein</strong>
        </>
      )
    },
    contact: {
      heading: "Contact",
      content:
        "Need to contact me? Fill in the form below and I'll get back to you as soon as possible. Thank you!",
      labels: {
        name: "Your name:",
        email: "Your email:",
        message: "Your message",
        send: "Send Message",
        reset: "Reset"
      }
    }
  }
};
