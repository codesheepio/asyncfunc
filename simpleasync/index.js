const asyncadd = (a, b, cb) => {
  setTimeout(() => cb(null, a + b), Math.random() * 1000)
}
const print = (err, n) => console.log(n)

asyncadd(3, 5, print)
asyncadd(13, 4, print)
asyncadd(9, 9, print)
console.log('Async add done!!!')
