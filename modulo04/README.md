# React

## O que React ?

- Biblioteca para contrução de interfaces;
- Utilizado para a contrução de Single-Page Applications;
- Tudo fica dentro do Javascript;

### Vantagens

- Organização do códgio
  - Componentização
    - Um componente é um conjunto de código de lógica, estruturação e estilização, que juntos, formam um componente que pode ser isolado do restante da aplicação sem que interfira no funcionamento da mesma.
- Divisão de responsabilidades
  - Back-end: Regra de negócio;
  - Front-end: Interface;
- Uma API, múltiplos clientes;
- Programação declarativa;

#### JSX

- Escrever HTML dentro do JavaScript
- Com React podemos criar nossos próprios elementos;

## Imperativo vs Declarativo

### Imperativo

```js
function montaBadge(num) {
  if (notificacoes === 0 && num > 0) {
    // Adiciona badge
    // container.appendChild(badge)...
  }
  if (notificacoes !== 0 && num > 0) {
    // Apenas muda o número
    // badge.innerHTML = num...
  }
  if (notificacoes !== 0 && num === 0) {
    // Remove badge
    // container.removeChild(badge)
  }
}
```

### Declativo

```js
function Badge({ num }) {
  return (
    <div id="container">
      {num > 0 && <div id="badge">{num}</div>}
      <span class="icon"></span>
    </div>
  );
}
```

- Não são dados os passos para o browser montar a badge, e sim apenas as condições para mostrar ou não mostrar um elemento ou outro.

## Babel / Webpack

- O browser não entende todo esse código;
- O babel converte o código JS de uma forma que o browser entenda;
- O Webpack possui várias funções:
  - Criação de bundle, arquivo com todo o código da aplicação;
  - Ensinar ao Javascript como importar arquvos CSS, imagens e etc;
  - Live reload com Webpack Dev Server;

```
O Webpack pega todo o céodigo javascript que o Babel compila e transoforma em um único código que é
consumido pela aplicação
```

## Ciclo de vida

### ComponentDidMount()

- Executado assim que o componente aparece em tela

### ComponentDidUpdate(prevProps, prevState)

- Executado sempre que houver alterações nas props ou estado

### ComponentWillUnmount()

- Executado sempre que o componente deixa de existir
