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