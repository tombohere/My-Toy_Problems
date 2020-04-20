// currying

// add(1)(2)(3);
function add1(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
console.log( add1(1)(2)(3) );  // 6

// add(1)(2)(3)...(n)()
function add2(a) {
  return function(b) {
    if (b) {
      return add2(a + b);
    }
    return a;
  }
}
console.log( add2(1)(2)(3)(4)(5)() );  // 15
console.log( add2(5)() );  // 5