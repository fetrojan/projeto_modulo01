
# PharmaFlow

Gerenciador de movimentações de produtos entre filiais.


## Visão Geral

PharmaFlow é um aplicativo desenvolvido para otimizar a gestão de movimentação de produtos entre filiais de uma organização. Esse projeto tem o objetivo de simplificar o acompanhamento de entregas e de gerenciamento de estoque, além de proporcionar um ambiente prático para cadastro e visualização de usuários, possibilitando uma gestão de movimentações eficiente.


## Problema Resolvido

No ambiente corporativo, o acompanhamento e controle de produtos entre diferentes locais podem se tornar uma tarefa complexa e suscetível a falhas, especialmente quando feito manualmente. PharmaFlow oferece uma solução digital centralizada para:

- Monitoramento eficaz de movimentações de produtos entre filiais.

- Acompanhamento de entregas realizado por motoristas, proporcionando uma visão clara das movimentações.

- Gestão de usuários e produtos de forma intuitiva e rápida, reduzindo a necessidade de processos manuais.
## Funcionalidades

- **Tela de Login Intuitiva** - Acesso rápido e seguro para os usuários autorizados.
- **Home Dinâmica** - Visão centralizada e fácil navegação entre listagem de produtos e gerenciamento de usuários.
- **Listagem de Produtos com Pesquisa Eficiente** - Permite busca otimizada e navegação simplificada.
- **Gestão de Usuários** - Cadastro e visualização de usuários de forma prática.
- **Gestão de Movimentações** - Visualização do status e detalhes de movimentações de produtos e entregas realizadas por motoristas.
- **Mapa de Trajeto** - Exibição visual do trajeto das entregas.


## Stack utilizada

**Front-end:**  React Native com TypeScript para desenvolvimento de uma interface mobile eficiente e responsiva.

**Back-end:**  Node.js com TypeScript, proporcionando uma base sólida e segura para a comunicação entre o aplicativo e o servidor.

**Gerenciamento de Navegação:** Utilização de `@react-navigation/native` para um fluxo de navegação intuitivo entre as telas.

## Estrutura do Projeto

O projeto é estruturado com uma navegação em pilha (`Stack Navigator`) que permite aos usuários uma transição fluida entre as telas. Principais componentes do fluxo de navegação incluem:

- *Login:* Tela inicial de autenticação.
- *Home:* Tela principal com listagens e acesso rápido aos recursos.
- *Inventory:* Exibição e controle de estoque.
- *Users:* Gestão de usuários cadastrados.
- *UserRegistration:* Tela de registro de novos usuários.
- *BranchMovement:* Tela de gestão de movimentações entre filiais.
- *CourierMovement:* Tela específica para motoristas acompanharem entregas.
- *NewMovement:* Interface para criação de novas movimentações.
- *Map:* Visualização de rotas de entregas no mapa.
## Como Executar

**1. Pré-requisitos:** Certifique-se de ter o Node.js instalado.

**2. Instalação de Dependências:**
~~~typescript
npm install
~~~

**3. Execução do App:**
~~~typescript
npm start
~~~

**4. Emulador ou Dispositivo Físico:**
Emule no simulador de Android/iOS ou faça o scan do QR code gerado pelo Expo para rodar o app em um dispositivo físico.
## Melhorias Futuras

- *Login:* Melhorar o sistema de login com mais segurança, com autenticação via Token.
- *Relatórios e Estatísticas:* Gerar relatórios personalizados com dados de movimentação de produtos, desempenho de motoristas e atividades de cada filial, com gráficos e visualizações que apoiem a tomada de decisões.
- *Mapa:* Mapa com traçado do trajeto real, com integração com Google Maps API.
## Feito por:

**Felipe R. Trojan**

*Linkedin:* [Felipe R. Trojan](https://www.linkedin.com/in/felipe-trojan-software-engineer/)
