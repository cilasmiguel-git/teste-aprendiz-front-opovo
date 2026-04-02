# Landing Page: Barbie (2023) 💖

## Introdução
Bem-vindo(a) ao repositório do projeto teste para o **Grupo O POVO**. 
Este projeto é uma Landing Page moderna focada no filme "Barbie (2023)". 

Para elevar a **Organização do Projeto** (um dos critérios de avaliação), a estrutura monolítica padrão foi refatorada para uma **Arquitetura Baseada em Web Components Nativos**. Sem usar frameworks (como Vue ou React), elaboramos maestria no Vanilla JavaScript isolando perfeitamente as dependências, os estilos e cada seção de tela.

## Tecnologias e Paradigmas
- **Vanilla Web Components**: Componentização real e nativa via classe `HTMLElement` baseada nas diretrizes formais do W3C.
- **CSS Modular**: Fomos além de uma folha de estilos única. Estabelecemos parâmetros globais em `variables.css` e css compartimentados na pasta de seu respectivo componente.
- **jQuery e OwlCarousel**: Como as seções são processadas dinamicamente via JS, as bibliotecas correm exatamente dentro do lifecycle (`connectedCallback`) mitigando quebras e loops do carrossel.

## Destaques do Projeto

### 🚀 Performance
- **Carregamento Otimizado**: Planejado para suportar imagens no formato **WebP** visando reduzir significativamente as requisições de rede.
- **Lazy Loading Nativos**: Atributo `loading="lazy"` aplicado estrategicamente nas imagens da ficha técnica e elenco para atrasar o download de mídias abaixo do *fold*.

### ♿ Acessibilidade e SEO
- **HTML Semântico**: Tags injetadas mantêm uso dos guias de WAI-ARIA, e tags `<main>`, `<article>` e `<dl>`.
- **Atributos ARIA**: Áreas de conteúdo utilizam escopos via `aria-labelledby` tornando a navegação amigável por leitores de tela.
- **Meta Tags de Alta Qualidade**: Descrições SEO e atributos **Open Graph**, essenciais para engajamento.

## Estrutura de Arquivos da Arquitetura Limpa
```text
├── index.html (Injecção apenas de custom tags semânticas da aplicação)
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css (Hub importador via @import)
│   │   ├── variables.css
│   │   └── base.css
│   └── js/
│       └── main.js
└── components/
    ├── Header/
    │   ├── Header.js
    │   └── header.css
    ├── FichaTecnica/
    ├── Elenco/
    ├── Resenhas/
    └── Footer/
```

---
*Desafio Técnico Front-end criado com dedicação para o Grupo O POVO.*
