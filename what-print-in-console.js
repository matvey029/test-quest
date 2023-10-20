//Отличие примитивного типа от ссылочного
const obj1 = {
    x: 5
}
const obj2 = obj1;

obj2.x = 8;

console.log(obj1.x)

let a = 5;
let b = a;

b = 9;

console.log(a);
console.log(b);

//Приведение типов примитивов
console.log(true + false)
console.log(12 / "6")
console.log(12 < "6")
console.log("number" + 15 + 3)
console.log(15 + 3 + "number")
console.log("foo" + +"bar")
console.log('true' == true)
console.log(!!"false" == !!"true")
console.log(false == 'false')
console.log(null == '')
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(null == undefined)
console.log(null === undefined)


//Приведение типов с объектами
console.log([1] > null)
console.log([1, 2] > null)
console.log(['x'] == 'x')
console.log([] + null + 1)
console.log([1, 2, 3] == [1, 2, 3])
console.log([1, 2, 3] === [1, 2, 3])
console.log({ a: 1 } - 1)
console.log({ a: 1 } + 2)