function task2() {
  let f = prompt("Введите пятизначное число");
  if (f.length === 5) {
    let array = f.split("");
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += parseInt(array[i]);
    }
    alert("Сумма = " + sum);
  } else {
    alert("Вы ввели не пятизначное число, повторите попытку");
  }
}
function task3() {
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 100 + 1);
    console.log(random);
    sum += random;
  }
  alert("Cумма = " + sum);
}
