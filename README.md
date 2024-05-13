# Teste Front Elements

Teste Front Elements é um projeto de e-commerce de produtos com scroll infinito, filtros de categoria, preço e avaliações, ordenação por ordem alfabética e preço, além de um quiz para testar conhecimentos sobre os produtos.

## Funcionalidades
- Scroll infinito para carregar mais produtos à medida que o usuário rola a página.
- Filtros por categoria, preço e avaliações para facilitar a busca por produtos específicos.
- Ordenação dos produtos por ordem alfabética e preço, proporcionando uma experiência de compra personalizada.
- Quiz com limite de tempo de 2 minutos para responder 15 perguntas, exibindo o ranking dos 3 jogadores com maior pontuação.

## Rodando localmente

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o projeto

```bash
  git clone https://github.com/felipecfb/teste-elements.git
```

2. Entre no diretório do projeto

```bash
  cd teste-elements
```

3. Instale as dependências utilizando o gerenciador de pacotes de sua preferência (npm, yarn, pnpm)

```bash
  pnpm install
```

4. Inicie o servidor de desenvolvimento

```bash
  pnpm run dev
```

5. Inicie a Fake API para carregar os produtos e o ranking de melhores jogadores

```bash
  pnpm run server
```

6. Abra o aplicativo no seu navegador de preferência

http://localhost:5173

## Tecnologias utilizadas

- React
- Typescript
- Tailwind CSS (Shadcn)
- Json Server (Fake API)
- React Query

## Exemplos de uso

Para participar do quiz, digite seu nome e clique no botão "Iniciar Quiz" e responda as perguntas no tempo estipulado. Ao final, você verá o ranking dos melhores jogadores.

Você pode repetir o quiz quantas vezes desejar para tentar melhorar sua pontuação e subir no ranking dos melhores jogadores.
