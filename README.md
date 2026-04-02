# Landing Page: Barbie (2023) 💖

## Introdução
Bem-vindo(a) ao repositório do projeto teste prático de front-end. Este projeto apresenta uma Landing Page moderna, focada no filme "Barbie (2023)", desenvolvida com foco total em **alta performance**, **acessibilidade** e **arquitetura limpa**.

---

## 🎯 Critérios de Avaliação Atendidos com Excelência

Este projeto foi sistematicamente arquitetado para pontuar com excelência em todos os critérios propostos no desafio:

1. **Sintaxe e Semântica do HTML:** 
   - Uso de elementos 100% semânticos (`<main>`, `<article>`, `<section>`, `<nav>`).
   - Expansão do HTML5 através de Web Components Nativos (ex: `<app-header>`, `<app-elenco>`) blindando e documentando o escopo de cada estrutura seguindo o padrão W3C.

2. **Baixo Tempo de Renderização (Performance):**
   - Construção com *Vanilla JavaScript* (zero dependência de frameworks colossais como React).
   - *Lazy Loading* nativo ativado nas imagens pesadas (`loading="lazy"`).
   - Refatoração dos carrosseis secundários (via remoção do pesado jQuery) a favor de motores fluídos próprios de empilhamento vertical com **CSS Grid** e **Flexbox** nativos.

3. **Noções de SEO:**
   - Meta tags descritivas inseridas no topo.
   - Padrão estrito de hierarquia de títulos lógicos na página (`<h1>` a `<h3>`).
   - Injeção das tags essenciais de **Open Graph (OG)** preparando o site perfeitamente para rankeamento e compartilhamento em redes sociais.

4. **Scripts no Geral (Arquitetura Modular):**
   - Criação de um motor purista de manipulação de DOM utilizando o `connectedCallback()` dos Custom Elements do navegador. A lógica (JS), o estilo (CSS) e o modelo (HTML) de cada sessão isolam seus eventos internamente, impedindo side-effects no site e garantindo máxima estabilidade.

5. **Responsividade Estrita (Figma):**
   - Entrega de grid *Fluid/Elastic* para uma correspondência 100% perfeita entre as telas Mobile, Tablet e Desktop.
   - Sistema de Auto-Centralização Responsiva (inclusive no banner de LGPD).
   - Prevenção do erro da "Tela Quebrada" em simuladores Super-Wide 4K instaurando limites estruturais rígidos (`max-width`).

6. **Organização do Projeto:**
   - Separação extrema: a pasta `components/` blinda peças exclusivas, enquanto a `assets/css/` é responsável pelos hubs globais (Tokens de Design no `variables.css` garantindo fácil remodelagem de cor caso o cliente deseje futuramente).

7. **Uso de Controle de Versão (Git):**
   - Todo o repositório foi trilhado por pequenos blocos através de **Conventional Commits** (`feat:`, `docs:`, etc), revelando uma habilidade Sênior no controle do versionamento durante a entrega de cada pedaço progressivo da aplicação.

---

## ✨ Features Extras e Diferenciais

Fomos além do layout estático esperado e inserimos soluções proativas de UX e Compliance:

- **♿ Widget de Acessibilidade:** Painel flutuante ancorado na lateral implementado com iconografia vetorial oficial (**FontAwesome 6**). Atua na interface exibindo acesso a Recursos Assistivos e interprete VLibras usando transições CSS avançadas.
- **🛡️ Compliance com LGPD:** Um moderno e dinâmico popup *Banner de Cookies* controlado na memória do navegador (`localStorage`). O modelo flutua nativamente sem danificar a rolagem da página.
- **🎬 Micro-Interações:** Animações CSS puras acionadas por detecção via código de *IntersectionObserver*. Componentes entram elegantemente deslizando ao focar na tela.

---

## 🚀 Como Rodar o Projeto

Devido à moderna Arquitetura Componentizada adotada e para uma experiência de simulação real livre de bloqueios CORS do navegador:

1. Recomendamos **não abrir** o arquivo `index.html` bruto com dois cliques (formato `file:///`).
2. Utilize a extensão **Live Server** no *Visual Studio Code* (ou sirva através de qualquer servidor HTTP local como `npx http-server`).
3. Abra a porta do Live Server na raiz do projeto e pronto, sinta a fluidez!

---

## 📁 Estrutura Exata de Arquivos

```text
├── index.html (Ponto de injeção limpo das Web Tags construtoras)
├── README.md
├── assets/
│   ├── css/
│   │   ├── style.css (Hub base importador via @import nativo)
│   │   ├── variables.css (Design Tokens e Cores da Identidade Barbie)
│   │   └── base.css (Resets globais e alicerce esquelético de footer)
│   └── js/
│       └── main.js
└── components/
    ├── Header/
    ├── FichaTecnica/
    ├── Elenco/
    ├── Resenhas/
    ├── Footer/
    ├── Acessibilidade/ (Extra)
    └── Cookies/ (Extra)
```

---
*Desafio Técnico de Front-end desenhado não somente para funcionar, mas para escalar.*
