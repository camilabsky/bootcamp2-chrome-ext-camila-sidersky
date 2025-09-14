# Extensão Chrome Murloc

Uma extensão simples para Chrome que traz a alegria dos Murlocs para seu navegador!

## Funcionalidades

- Popup com tema Murloc e estilo personalizado
- Botão interativo com resposta do Murloc
- Service worker em segundo plano para tratamento de mensagens
- Integração com script de conteúdo

## Instalação

1. Clone este repositório
2. Abra o Chrome e navegue até `chrome://extensions/`
3. Ative o "Modo desenvolvedor" no canto superior direito
4. Clique em "Carregar sem compactação" e selecione o diretório desta extensão

## Estrutura de Diretórios

```
my-chrome-extension/
├─ src/
│  ├─ popup/
│  │  ├─ popup.html
│  │  ├─ popup.js
│  │  └─ popup.css
│  ├─ content/
│  │  └─ content.js
│  ├─ background/
│  │  └─ service-worker.js
│  ├─ assets/
│  │  └─ logo.svg
│  └─ styles/
│     └─ global.css
├─ icons/
│  ├─ icon16.png
│  ├─ icon32.png
│  ├─ icon48.png
│  └─ icon128.png
├─ docs/
│  └─ index.html
├─ manifest.json
├─ README.md
└─ LICENSE
```

## Desenvolvimento

Para fazer alterações na extensão:

1. Edite os arquivos em seus respectivos diretórios
2. Recarregue a extensão no Chrome
3. Teste suas alterações

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
