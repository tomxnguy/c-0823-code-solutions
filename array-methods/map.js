const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salesPrice = prices.map((price) => ({ price, salesPrice: price / 2 }));

console.log('Price Objects', salesPrice);

const formatPrice = prices.map((price) => '$' + price.toFixed(2));

console.log(formatPrice);
