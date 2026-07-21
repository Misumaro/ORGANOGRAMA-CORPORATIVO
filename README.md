# 📊 Organograma Corporativo Avançado

![GitHub repo size](https://img.shields.io/github/repo-size/Misumaro/ORGANOGRAMA-CORPORATIVO?color=blue&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Misumaro/ORGANOGRAMA-CORPORATIVO?color=blue&style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Misumaro/ORGANOGRAMA-CORPORATIVO?color=blue&style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

Uma aplicação web premium para visualização de **Organogramas Corporativos e Infográficos de Governança**, focado em clareza hierárquica para estruturas densas, design corporativo de alto nível e **interações coreografadas com física realista**.

---

## 🚀 Demonstração ao Vivo

🔗 **Acesse o GitHub Pages:**
[https://misumaro.github.io/ORGANOGRAMA-CORPORATIVO/](https://misumaro.github.io/ORGANOGRAMA-CORPORATIVO/)

---

## ✨ Destaques e Funcionalidades

* 📌 **Infográfico de Governança:** Vai além das caixas tradicionais, mapeando áreas operacionais gigantescas em uma visão única.
* 🎞️ **Motion Design Enterprise:** Animações fluidas, em cascata (stagger) e com física elástica (bounce) utilizando a biblioteca líder mundial **GSAP**.
* 🧱 **Layout CSS Grid Preciso:** A arquitetura visual utiliza grids absolutos para desenhar linhas de conexão complexas que não quebram, ideal para logística e indústrias.
* ➕ **Navegação Interativa:** Expansão e recolhimento de diretorias sob demanda, reduzindo a poluição visual.
* 🎨 **Bordas Dinâmicas (SVG):** Os cartões possuem bordas traçadas em SVG que se autoajustam ao tamanho do cartão.
* 🔍 **Ajuste Automático (*Fit-to-Screen*):** Zoom inteligente que enquadra perfeitamente a estrutura na tela do usuário.
* 🎨 **Tematização Setorial:** Código de cores para separar claramente os pilares de Diretoria, Administrativo Financeiro, Operações e Comercial.

---

## 🛠️ Stack Tecnológico

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica e mapeamento em Grid da árvore de departamentos. |
| **CSS3** | Layout inflexível e preciso, tematização via variáveis (`:root`) e tipografia. |
| **GSAP 3** | Motor de animação (`gsap.timeline()`) para criar a cronologia de abertura das linhas e revelação em cascata dos cards. |
| **SVG / JS** | Cálculo dinâmico em tempo de execução para desenhar bordas perimetrais. |
| **Google Fonts** | Tipografia profissional minimalista (**Inter** e **Montserrat**). |

---

## 📁 Estrutura do Projeto

```bash
ORGANOGRAMA-CORPORATIVO/
│
├── index.html          # Marcação em Grid e blocos operacionais
│
├── css/
│   └── styles.css      # Sistema de design, cores e linhas
│
├── js/
│   └── script.js       # Lógica de expansão, SVG e Timelines GSAP
│
├── assets/             # Logotipos e mídias
│
└── README.md           # Documentação do projeto
```

---

## 🧠 Arquitetura Visual

Ao contrário de bibliotecas geradoras automáticas de organogramas (que costumam criar árvores desajeitadas quando há milhares de nós), este projeto optou por uma **arquitetura de Layout Rígido e Customizado**. 

A tela funciona como uma prancheta de design infinito, onde colunas e linhas são desenhadas com exatidão usando CSS, permitindo criar representações híbridas que misturam estrutura hierárquica com fluxo de processo logístico. As animações com GSAP respeitam essas posições, fazendo as linhas "crescerem" do ponto exato e os cartões surgirem cronologicamente.

---

## 📌 Como Customizar para sua Empresa

Por ser um infográfico em Grid, a edição é feita diretamente na estrutura HTML e CSS.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Misumaro/ORGANOGRAMA-CORPORATIVO.git
   ```
2. **Abra o arquivo `index.html`** em qualquer editor de código (VS Code, por exemplo).
3. **Edite os Cartões:** Procure pelas tags `<div class="card-content">` para alterar nomes de gerentes, diretorias e cargos.
4. **Altere as Cores:** Vá em `css/styles.css` e modifique os valores hexadecimais nas variáveis globais (ex: `--theme-financeiro`, `--theme-operacao`).
5. **Veja o resultado:** Abra o `index.html` no seu navegador favorito.

---

## 📄 Licença

Este projeto é de código aberto e está sob a licença **MIT**.
Você pode utilizá-lo livremente para apresentações corporativas, sistemas internos de RH e auditorias de governança corporativa.

---

## 👨‍💻 Autor

Desenvolvido e atualizado com excelência por **Marlon Ferreira (Misumaro)**. 

⭐ *Se esse projeto agregou valor à sua empresa, deixe uma estrela no repositório!*
