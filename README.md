# Pizzaria Voors

Este é um projeto de uma aplicação de pedidos para uma pizzaria, desenvolvido usando React, TypeScript e Vite. O objetivo é permitir que os usuários façam pedidos personalizáveis de pizzas, visualizem o resumo do pedido e simulem o processo de preparação.

## Tecnologias Utilizadas

- **React** e **TypeScript** para desenvolvimento front-end.
- **Vite** para o bundling e execução local.
- **Tailwind CSS** para o estilo.
- **ESLint** para padronização de código.
- **Docker** e **Makefile** para automação e simplificação de tarefas de execução.

## Funcionalidades

- **Seleção de Opções**: Os usuários podem selecionar opções de pizza, como tamanho e ingredientes.
- **Resumo do Pedido**: Visualização dos detalhes do pedido com cálculo do preço total e tempo de preparação.
- **Testes**: Implementação de testes unitários para componentes e funções principais.

## Pré-requisitos

- Node.js (>= versão 14)
- Docker

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedrolimass/pizzaria-voors.git
   cd pizzaria-voors
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Uso com Makefile

O `makefile` contém comandos para facilitar a execução do projeto com Docker. Abaixo estão os comandos disponíveis:

- **Build**: Constrói a imagem Docker e inicia os serviços:
  ```bash
  make build
  ```

- **Run**: Inicia a aplicação usando Docker Compose:
  ```bash
  make run
  ```

- **Start**: Inicia os contêineres parados sem reconstruir:
  ```bash
  make start
  ```

- **Stop**: Para os contêineres em execução:
  ```bash
  make stop
  ```

- **Prune**: Remove recursos Docker não utilizados (imagens, volumes, etc.):
  ```bash
  make prune
  ```

Após iniciar o serviço, a aplicação estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

- **`/src/components`**: Componentes da interface, como `OptionSelector` e `OrderSummary`.
- **`/src/context`**: Contexto global para manipulação de estado.
- **`/src/utils`**: Funções utilitárias, incluindo cálculo de preço e tempo de preparação.

## Testes

Os testes estão localizados nas pastas `src/components/__tests__` e `src/utils/__test__`.

Para executar os testes:

```bash
npm run test
```

## Contribuição

Para contribuir com o projeto:

1. Crie um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/NomeDaFeature`).
3. Faça commit de suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para o branch (`git push origin feature/NomeDaFeature`).
5. Abra um Pull Request.

