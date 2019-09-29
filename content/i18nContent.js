export const IndexPageContent = {
  "pt-BR": {
    title:
      "Tradutora | Professora de Português | Baseada no Brasil | Vitória Régia"
  },
  "en-US": {
    title: "Translator | Portuguese Teacher | Based in Brazil | Vitória Régia"
  }
};

export const HeaderContent = {
  "pt-BR": {
    description: {
      line1: "Tradutora | Professora de Português",
      line2: "Baseada no Brasil"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos
            quam, excepturi omnis ipsum error animi! Corrupti omnis assumenda
            ab, consectetur rem, sequi, perferendis nesciunt atque excepturi
            voluptates quia accusantium.
          </p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </>
      )
    },
    about: {
      heading: "Sobre Mim",
      content: () => (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos
            quam, excepturi omnis ipsum error animi! Corrupti omnis assumenda
            ab, consectetur rem, sequi, perferendis nesciunt atque excepturi
            voluptates quia accusantium.
          </p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </>
      )
    },
    contact: {
      heading: "Contato",
      content:
        "Precisa entrar em contato comigo? Preencha o formulário abaixo e retornarei assim que possível. Obrigada!",
      legends: ["Seu nome:", "Seu email:", "Sua mensagem", "Enviar", "Limpar"]
    }
  },
  "en-US": {
    work: {
      heading: "My Work",
      content: () => (
        // Has to be function to enable text styling
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos
            quam, excepturi omnis ipsum error animi! Corrupti omnis assumenda
            ab, consectetur rem, sequi, perferendis nesciunt atque excepturi
            voluptates quia accusantium.
          </p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </>
      )
    },
    about: {
      heading: "About Me",
      content: () => (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos
            quam, excepturi omnis ipsum error animi! Corrupti omnis assumenda
            ab, consectetur rem, sequi, perferendis nesciunt atque excepturi
            voluptates quia accusantium.
          </p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </>
      )
    },
    contact: {
      heading: "Contact",
      content:
        "Need to contact me? Fill in the form below and I'll get back to you as soon as possible. Thank you!",
      legends: [
        "Your name:",
        "Your email:",
        "Your message",
        "Send Message",
        "Reset"
      ]
    }
  }
};

export const FooterContent = {};
