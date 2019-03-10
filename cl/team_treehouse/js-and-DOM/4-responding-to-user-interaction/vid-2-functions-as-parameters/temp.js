function exec(func, arg) {
  func(arg);
}

exec((something) => {
  console.log(something);
, 'greetings everyone');}
