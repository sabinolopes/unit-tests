const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const menu = createMenu(  {
      food: {},
      drinks: {},
    });

    const obj1 =   {
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    };

    const obj2 =   {
      food: {},
      drinks: {},
    };

    //verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu
    expect(menu).toHaveProperty('fetchMenu');

    //verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função
    const func = menu.fetchMenu;

    expect(typeof func).toBe('function');

    //verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e 
    const newMenu = createMenu(obj1).fetchMenu();
    const newMenu2 = createMenu(obj2).fetchMenu();

    expect(newMenu).toMatchObject(obj1);

    //verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    expect(obj1).toEqual(newMenu);
    expect(obj2).toEqual(newMenu2);

    //caso o valor (que nesse caso é uma string) passada por parâmetro para order não conste no objeto passado como parâmetro para createMenu (nem em food ou drinks), o retorno da chave order deve ser:
    // exibir a mensagem "Item indisponível";
    // e não alterar a chave consumption.
    // Caso o valor exista no objeto passado como parâmetro para createMenu o item deve ser adicionado ao array consumption.
    const menu2 = createMenu(obj1);
    menu2.order('pizza')

    expect(menu2.order('pizza')).toBe('Item indisponível');
    expect(menu2.consumption).toEqual([]);

    menu2.order('coxinha');

    expect(menu2.consumption).toEqual(['coxinha']);

    //verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos
    menu2.order('sanduiche');
    menu2.order('cerveja');

    expect(menu2.consumption).toEqual(['coxinha', 'sanduiche', 'cerveja'])

    //verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.
    menu2.order('coxinha');
    expect(menu2.consumption).toEqual(['coxinha', 'sanduiche', 'cerveja', 'coxinha'])

    //verifica que, ao chamar a função pay(), deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. 

    expect(menu2.pay()).toBeCloseTo(27.06);
  });
});
