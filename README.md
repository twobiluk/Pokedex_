# Pokédex

Este é um projeto de Pokédex desenvolvido utilizando Ionic e Angular, integrando a API do PokeAPI para obter dados dos Pokémon. O objetivo do projeto é proporcionar uma interface intuitiva e responsiva para visualizar informações detalhadas sobre diferentes Pokémon.

## Abordagem

1. **Estrutura Modular**: A organização do código foi feita de forma modular, separando componentes, serviços, modelos e páginas para uma melhor organização.
2. **Serviços HTTP**: Foi criado um serviço dedicado (`PokemonService`) para lidar com todas as requisições HTTP para a PokeAPI, em prol de uma separação clara entre a lógica de negócios e a apresentação.
3. **Componentização**: Desenvolvi componentes reutilizáveis para exibir listas de Pokémon, detalhes e imagens, facilitando a manutenção e a extensão futura.
4. **Rotas Dinâmicas**: Configurei rotas dinâmicas no Angular para navegar entre a lista de Pokémon e a página de detalhes.
5. **Design Responsivo**: Utilizeio os recursos de design responsivo do Ionic para garantir que a aplicação funcione bem em diferentes dispositivos e tamanhos de tela.
6. **Design Patterns**: Usei o padrão de camadas de cebola para organizar o código em camadas concêntricas, cada uma com sua própria responsabilidade, facilitando a manutenção e a escalabilidade.
7. **Manutenção da UI**: Mantive a interface do usuário simples e limpa, utilizando padrões de cores elegantes e sofisticados para garantir uma boa experiência do usuário.
8. **Boas Práticas de Código**: Segui boas práticas de codificação e design patterns, como injeção de dependência e separação de preocupações, para manter o código limpo e organizado.
9. **Documentação e Comentários**: Incluí documentação e comentários no código para facilitar a compreensão e a colaboração futura.
10. **Estilo de Codificação**: Utilizeio padrões de projeto, como o MVC (Model-View-Controller), foram utilizados para separar as preocupações e promover a reutilização de código. Componentização e serviços foram empregados para facilitar a manutenção e escalabilidade do código.

## Estrutura do Projeto

- `src/app`: Contém os módulos, componentes, serviços e páginas da aplicação.
  - `components/`: Componentes reutilizáveis da aplicação.
    - `pokemon-list/`: Componente para exibir a lista de Pokémon.
    - `pokemon-detail/`: Componente para exibir os detalhes de um Pokémon específico.
  - `services/`: Serviços para interação com a PokeAPI.
    - `pokemon.service.ts`: Serviço para obter dados dos Pokémon.
  - `models/`: Modelos utilizados na aplicação.
    - `pokemon.model.ts`: Modelo de dados para os Pokémon.
  - `pages/`: Páginas principais da aplicação.
    - `home/`: Página inicial que exibe a lista de Pokémon.
    - `pokemon-detail/`: Página que exibe os detalhes de um Pokémon.
  - `app.module.ts`: Módulo principal da aplicação.
  - `app.component.ts`: Componente raiz da aplicação.
- `src/assets`: Contém os arquivos estáticos, como imagens e estilos.
- `src/environments`: Contém os arquivos de configuração de ambiente.
  - `environment.ts`: Configurações para o ambiente de desenvolvimento.
  - `environment.prod.ts`: Configurações para o ambiente de produção.
- `package.json`: Arquivo de configuração do npm com as dependências do projeto.
- `angular.json`: Configurações específicas do Angular.
- `ionic.config.json`: Configurações específicas do Ionic.

## Tecnologias Utilizadas

- **Ionic**: Framework para desenvolvimento de aplicações híbridas.
- **Angular**: Plataforma para construção de aplicações web.
- **RxJS**: Biblioteca para programação reativa no JavaScript.
- **PokeAPI**: API pública para obter dados dos Pokémon.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.

---

Desenvolvido por [Thales Rocha](https://github.com/twobiluk)
