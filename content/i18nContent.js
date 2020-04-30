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
                Aulas Particulares de Português Brasileiro para estrangeiros(as)
                <ul>
                  <li>Conteúdo personalizado de acordo com a necessidade de cada aluno(a)</li>
                  <li>Ideal para trabalhadores e estudantes de intercâmbio</li>
                  <li>Aulas presenciais ou online</li>
                </ul>
              </li>
              <li>
                Depoimentos de ex-alunos(as)
                <ul>
                <li>"Vitória me ajudou a melhorar meu português, partindo do nível iniciante até eu conseguir ter conversas básicas com os nativos. Ela é muito habilidosa e paciente, e moldou as aulas exatamente às minhas necessidades. Eu recomendo as aulas dela fortemente, não importando seu nível de português" &mdash; <a href="https://www.facebook.com/JPetrik93">Juraj Petrík</a>, Eslovaco, Engenheiro de Software</li>
                <li>"As aulas de português com a Vitória foram muito úteis para minha estadia no Brasil. As aulas eram personalizadas, e o ritmo baseado no quão rápido podíamos ir. Ela tem habilidades excelentes como professora, e as aulas eram revigorantes e divertidas"</li> &mdash; <a href="https://www.facebook.com/IboWa">Ibrahim Yildirim</a>, Dinamarquês, Engenheiro de Software
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
            Sou graduada em Letras-Português e mestra em Linguística pela
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
        "Precisa entrar em contato comigo? Basta enviar uma mensagem. Obrigada!",
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
                Private Brazilian Portuguese classes to foreigners
                <ul>
                  <li>Custom-made content for each student, according to his/her needs</li>
                  <li>Ideal for workers and exhange students</li>
                  <li>Online or on-premises classes</li>
                </ul>
              </li>
              <li>
               Testmonials from ex-students
               <ul>
                 <li>"Vitória helped me improve my Portuguese from near begginer to being able to hold basic converfastions with the locals. She was very skilled and patient and catered the lesson exactly to my needs. I highly recommend her lessons to anyone, no matter what your skill level is" &mdash; <a href="https://www.facebook.com/JPetrik93">Juraj Petrík</a>, Slovakian, Software Engineer</li>
                 <li>"The Portuguese classes with Vitória were very helpful for my time in Brazil. The lessons were tailormade and the pace was based on how fast we could go. She has really good skills and the classes were soothing and fun" &mdash; <a href="https://www.facebook.com/IboWa">Ibrahim Yildirim</a>, Danish, Software Engineer</li>
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
            I received a degree in Literature and a MSc in Linguistics from
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
        "Need to contact me? Send me a message I'll get back to you as soon as possible. Thank you!",
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
