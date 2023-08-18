const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(productDetails('produto1', 'produto2')).toBeInstanceOf(Array);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('produto1', 'produto2')).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const array = productDetails('produto1', 'produto2');
    array.forEach((product) => {
      expect(typeof product).toBe('object');
    })

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const array2 = productDetails('produto3', 'produto4');

    expect(array[0]).not.toBe(array2[0]);
    expect(array[1]).not.toBe(array2[1]);

    // Teste se os dois productIds terminam com 123.
    // const id1 = array[0].details.productId;
    // const id2 = array[1].details.productId;
    // expect(id1).toMatch('123');
    // expect(id2).toMatch('123');

    array.forEach((item) => {
      const string = item.details.productId;

      expect(string).toMatch('123');
    });
  });
});
