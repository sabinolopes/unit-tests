/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (obj) => {
  const ordered = [];

  const newObj = {
    fetchMenu: () => obj,
    consumption: ordered,
    order: (product) => {
      const hasFood = Object.prototype.hasOwnProperty.call(obj.food, product);
      const hasDrinks = Object.prototype.hasOwnProperty.call(obj.drinks, product);

      if (hasFood || hasDrinks) {
        ordered.push(product);

        return ordered;
      }

      return 'Item indisponível';
    },
    pay: () => {
      let totalPrice = 0;
      ordered.forEach((order) => {
        if (obj.food[order]) totalPrice += obj.food[order];
        if (obj.drinks[order]) totalPrice += obj.drinks[order];
      });
      return totalPrice * 1.10;
    },
  };

  return newObj;
};

module.exports = createMenu;