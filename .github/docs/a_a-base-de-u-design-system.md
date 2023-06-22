# Parte 1 - A base de um Design System

- A utilização de `<const>` em cada export de token, auxilia nas informações de sugestões do vscode.

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
