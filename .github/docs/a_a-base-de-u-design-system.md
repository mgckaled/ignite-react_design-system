# Parte 1 - A base de um Design System

- A utilização de `<const>` em cada export de token, auxilia nas informações de sugestões do vscode.
- Ao definir `"private": true` no arquivo `package.json` de um projeto JavaScript/Typescript, você está indicando que o projeto não deve ser publicado no registro público de pacotes, como o npm (Node Package Manager). Essa configuração impede que você acidentalmente publique um pacote privado em um registro público, o que é importante quando você está trabalhando em um projeto que não deve ser compartilhado publicamente. Quando um projeto tem `"private": true` definido no `package.json`, as tentativas de publicação do pacote falharão, e você receberá uma mensagem de erro indicando que o pacote é privado. Essa configuração é útil quando você está desenvolvendo um projeto interno, um pacote específico para a sua organização ou um projeto pessoal que não deve ser compartilhado publicamente. Dessa forma, você evita que outras pessoas acidentalmente usem ou dependam do seu pacote privado como se fosse um pacote público. Além disso, o uso de `"private": true` também pode afetar o comportamento de ferramentas e fluxos de trabalho relacionados ao gerenciamento de pacotes, como linters e build systems, que podem tratar um pacote privado de maneira diferente ou não considerá-lo em determinadas operações, como instalação automática de dependências. Resumindo, definir `"private": true` no `package.json` é uma medida de segurança para garantir que seu projeto não seja publicado acidentalmente em um registro público e também pode influenciar o comportamento de ferramentas relacionadas ao gerenciamento de pacotes.

## O que é o `tsup`

O pacote npm "tsup" é uma ferramenta de empacotamento e bundling para projetos TypeScript. É uma alternativa leve e simples ao uso de ferramentas mais complexas, como o Webpack ou o Rollup.

O "tsup" é projetado para simplificar o processo de construção e empacotamento de aplicativos ou bibliotecas TypeScript. Ele fornece uma abordagem minimalista, focada em obter resultados rapidamente, sem a necessidade de configurações complicadas.

Algumas das principais características e funcionalidades do "tsup" incluem:

1. Suporte para módulos TypeScript (ES modules) e CommonJS.
2. Empacotamento e otimização de código, incluindo a remoção de importações não utilizadas.
3. Geração de um único arquivo JavaScript (ou vários arquivos se necessário).
4. Compatibilidade com Node.js e navegadores modernos.
5. Opções de configuração para personalizar o comportamento do empacotamento.

Para usar o "tsup", você precisa tê-lo instalado em seu projeto como uma dependência. Você pode instalá-lo globalmente ou localmente no projeto, de acordo com suas necessidades. Após a instalação, você pode executar o "tsup" através da linha de comando e configurar as opções necessárias para empacotar seu código TypeScript.

Por exemplo, para empacotar um arquivo "index.ts" e gerar um único arquivo JavaScript chamado "bundle.js", você pode executar o seguinte comando:

```bash
tsup index.ts --outDir dist --format cjs
```

Isso gerará o arquivo "bundle.js" na pasta "dist" usando o formato CommonJS.

É importante ressaltar que o "tsup" é uma ferramenta específica e seu uso pode variar dependendo das necessidades do projeto. Sempre consulte a documentação oficial do "tsup" e verifique suas funcionalidades e opções disponíveis.

## O que é um Monorepo?

Um monorepo (repositório único) é uma abordagem de gerenciamento de código em que vários projetos ou componentes relacionados são mantidos em um único repositório de controle de versão. Em vez de dividir cada projeto ou componente em repositórios separados, eles são agrupados em um único repositório.

Em um monorepo, você pode ter várias pastas, cada uma representando um projeto ou componente diferente. Essas pastas podem conter código-fonte, configurações de compilação, testes e qualquer outra coisa necessária para o desenvolvimento e manutenção desses projetos. Compartilhar um único repositório entre projetos relacionados tem várias vantagens, como:

1. Compartilhamento de código: Os projetos dentro do monorepo podem compartilhar código com facilidade. Em vez de duplicar o código comum em vários repositórios, você pode criar bibliotecas compartilhadas e reutilizáveis que são usadas por diferentes projetos dentro do monorepo.

2. Gerenciamento de dependências simplificado: Com todos os projetos no mesmo repositório, é mais fácil gerenciar e atualizar as dependências compartilhadas. Você pode garantir que todos os projetos usem as mesmas versões de bibliotecas compartilhadas, evitando problemas de compatibilidade.

3. Coordenação simplificada: Ao ter todos os projetos em um único repositório, é mais fácil coordenar alterações e desenvolvimento em diferentes componentes. As alterações em um projeto podem ser facilmente revisadas e testadas em relação a outros projetos relacionados.

4. Versionamento consistente: O monorepo permite um versionamento consistente em todos os projetos. Você pode atribuir uma única versão para todo o repositório ou adotar um esquema de versionamento que mantém as versões dos projetos sincronizadas.

5. Facilidade de integração contínua: Com um monorepo, a configuração de integração contínua (CI) e entrega contínua (CD) pode ser aplicada a todo o repositório, facilitando a construção, teste e implantação de todos os projetos.

Embora os monorepos ofereçam várias vantagens, também podem apresentar desafios, como a gestão de um repositório grande, a complexidade de testes e implantações em larga escala e a necessidade de uma estrutura de diretórios bem organizada. No entanto, com ferramentas adequadas e boas práticas de desenvolvimento, os monorepos podem ser uma abordagem eficiente para gerenciar projetos e componentes relacionados.

Informações adicionais sobre monorepos:

1. Escalabilidade: Os monorepos são especialmente úteis para projetos de grande escala, onde há muitos projetos interdependentes. Ao agrupar todos eles em um único repositório, facilita a colaboração e o compartilhamento de código entre equipes.

2. Histórico de alterações unificado: Com um monorepo, você tem um histórico de alterações unificado para todos os projetos. Isso torna mais fácil rastrear e entender as mudanças que ocorreram em diferentes componentes ao longo do tempo.

3. Facilidade na refatoração de código: Se você precisar refatorar uma parte compartilhada do código em um monorepo, pode fazer as alterações necessárias em um único lugar, em vez de propagar as alterações por vários repositórios separados.

4. Melhor visibilidade: Ao ter todos os projetos em um único repositório, é mais fácil ter uma visão geral do estado do código e das dependências entre os projetos. Isso pode ajudar a identificar e resolver problemas de forma mais eficiente.

5. Reutilização de ferramentas e configurações: Em um monorepo, você pode ter configurações compartilhadas, como linters, formatters e scripts de construção. Isso garante a consistência e facilita a manutenção das ferramentas em todos os projetos.

6. Agilidade na entrega: Com um monorepo, você pode fazer alterações e lançamentos simultaneamente em vários projetos relacionados. Isso ajuda a manter a consistência e a evitar problemas de incompatibilidade entre versões diferentes de componentes.

Algumas ferramentas populares usadas para gerenciar monorepos incluem o Yarn Workspaces, Lerna, Rush Stack e Nx. Essas ferramentas fornecem recursos adicionais para lidar com a construção, teste, gerenciamento de dependências e implantação de monorepos.

É importante ressaltar que nem todos os projetos se beneficiam de um monorepo, e a decisão de adotar essa abordagem depende das necessidades e complexidade do seu projeto. É recomendável avaliar cuidadosamente os prós e contras antes de decidir utilizar um monorepo em vez de vários repositórios separados.
