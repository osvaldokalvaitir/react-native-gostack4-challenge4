# React Native - Desafio 4

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/react-native-desafio4/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/react-native-desafio4.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/react-native-desafio4.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/react-native-desafio4.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/react-native-desafio4.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/react-native-desafio4.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/react-native-desafio4.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Descrição.

## Desafio 4

Nesse desafio você irá construir uma aplicação com interface de e-commerce, o usuário poderá adicionar produtos ao carrinho e no final exibir o valor total do pedido.

Além disso, os dados de produtos e categorias virão de uma API com json-server (o arquivo da API está na pasta do desafio).

A interface da aplicação será como a seguinte:

![Telas](/assets/screens.png)

### Regras

- Os dados devem ser consumidos do JSON Server utilizando o arquivo server.json em anexo;
- O usuário deve poder adicionar produtos, alterar sua quantidade e removê-lo do carrinho;
- O valor do carrinho deve ser calculado pela soma dos preços x quantidades;
- A barra de categorias deve fornecer scroll horizontal para ver todas categorias;
- As requisições assíncronas devem utilizar Redux Saga;
- Você deve exibir sinais de loading enquanto a requisição está sendo feita na lista de produtos/categorias inicial;

### URL's

- http://localhost:3000/categories (Busca categorias)
- http://localhost:3000/category_products/1 (Busca produtos pelo ID da categoria)
- http://localhost:3000/products/1 (Busca detalhes do produto pelo ID)

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

  - [Execução da API](#execução-da-api)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga a Execução de Projeto.

### Execução da API

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/json-server.md) e siga a Execução de API.

## Utilizados no Projeto

### Bibliotecas

x- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [Babel Root Import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-plugin-root-import.md)

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

x- [Ducks](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/ducks.md)

- [eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [ESLint plugin for React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react-native.md)

- [eslint-import-resolver-babel-plugin-root-import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-import-resolver-babel-plugin-root-import.md)

x- [JSON Server](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/json-server.md)

x- [React Native Gesture Handler](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-gesture-handler.md)

x- [React Native Vector Icons](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-vector-icons.md)

x- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

x- [React Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-redux.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

x- [react-native-iphone-x-helper](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-iphone-x-helper.md)

x- [react-native-swift](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-swift.md)

x- [react-native-track-player](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-track-player.md)

x- [reactotron-react-native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-react-native.md)

x- [reactotron-redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux.md)

x- [reactotron-redux-saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux-saga.md)

x- [Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux.md)

x- [Redux-Saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux-saga.md)

x- [reduxsauce](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reduxsauce.md)

x- [seamless-immutable](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/seamless-immutable.md)

x- [styled-components](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/styled-components.md)
