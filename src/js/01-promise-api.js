/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнен успешно, с результатом (исполнен, fulfield)');
    }
    reject('Промис выполнился с ошибкой(отклонён, rejected)');
  }, 2000);
});

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду выполнятся в любом случае'));

function onFulfilled(result) {
  console.log('onFulfilled->onFulfilled');
  console.log(`${result}`);
}

function onRejected(error) {
  console.log('onRejected->onRejected');
  console.log(`${error}`);
}
/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */
