// global counter
var counter = 0;
var addglobal = () => {
  counter += 1;
  console.log(counter);
}
addglobal();
addglobal();
addglobal();

// local counter
var addlocal = () => {
  var counter = 0;
  counter += 1;
  console.log(counter);
}
addlocal();
addlocal();
addlocal();

// closure
var addclosure = (() => {
  var counter = 0;
  return () => {
    counter += 1;
    console.log(counter);
  }
})();
addclosure();
addclosure();
addclosure();




// closure
var add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}

var size_small = add(5);
var size_mid = add(12);
var size_large = add(16);
size_small(3);
size_mid(3);
size_large(3);
