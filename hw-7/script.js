// Провести заміри продуктивності для звичайного об’єкта, об’єкта без прототипу та MAP.
// Зробити заміри на різних наборах даних, наприклад 100 ключів, 10 000 ключів, 10 000 000 ключів.
// Дослідити швидкість добавлення нового ключа, взяття значення за ключем, видалення ключа на кожному наборі даних.
// Також дослідити перетворення тестовану структуру даних у масив,
// швидкість ітерації(у чистій формі та разом з конвертацією).

let object = {};
let objectWithoutPrototype = Object.create(null);
let map = new Map();

let key = 5; //10000; 10000000;

for (let i = 0; i < key; i++) {
  object[i] = i;
  objectWithoutPrototype[i] = i;
  map.set(i, i);
}
/**
 * Add
 */

console.time('Adding to object');
object[key] = key;
console.timeEnd('Adding to object');

console.time('Adding to objectWithoutPrototype');
objectWithoutPrototype[key] = key;
console.timeEnd('Adding objectWithoutPrototype');

console.time('Adding to map');
map.set(key);
console.timeEnd('Adding to map');

/**
 * Find
 */

let result1;

console.time('Get object');
result1 = object[key];
console.timeEnd('Get object');

console.time('Get objectWithoutPrototype');
result1 = objectWithoutPrototype.key;
console.timeEnd('Get objectWithoutPrototype');

console.time('Get map');
result1 = map.get('key');
console.timeEnd('Get map');

/**
 * Delete
 */

console.time('Delete object');
delete object[key];
console.timeEnd('Delete object');

console.time('Delete objectWithoutPrototype');
delete objectWithoutPrototype[key];
console.timeEnd('Delete objectWithoutPrototype');

console.time('Delete map');
map.delete(key);
console.timeEnd('Delete map');

//Написати функцію, яка приймає об’єкт у якості аргументу та повертає Map з тими самими даними.
//Тобто просто перетворити об’єкт у Map.

function convertObject(obj) {
  return new Map(Object.entries(obj));
}

//Написати функцію, яка приймає Map у якості аргументу та повертає об’єкт з тими самими даними.
//Тобто просто перетворити Map у об’єкт.

function convertMap(map) {
  return Object.fromEntries(map.entries());
}
