// Створення об'єкту car
let car = {
    model: 'Tesla Model S',
    year: 2021,
    color: 'white'
  };
  
  // Зміна значення властивості color
  car.color = 'black';
  
  // Додавання властивості type
  car.type = 'electric';
  
  // Створення методу signal
  car.signal = function() {
    alert('fa!fa!');
  };
  
  // Виклик методу signal
  car.signal();



  let salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
      alert('We must pay salary on Tuesday!')
    },
    total() {
      let sum = 0;
      for (let key in this) {
        if (typeof this[key] === 'number') {
          sum += this[key];
        }
      }
      console.log(sum);
    }
  };
  
  // Виклик методу total()
  salaries.total(); // 30000
  
  // Додавання властивості manager
  salaries.manager = 5000;
  
  // Виклик методу total()
  salaries.total(); // 35000



  function Computer(brand, system, cost) {
    this.brand = brand;
    this.system = system;
    this.cost = cost;
  }
  
  Computer.prototype.toString = function() {
    return this.brand;
  }
  
  Computer.prototype.valueOf = function() {
    return this.cost;
  }
  
  Computer.prototype[Symbol.toPrimitive] = function(hint) {
    if (hint === 'string') {
      return this.brand;
    } else if (hint === 'number') {
      return this.cost;
    } else {
      return this.brand + ' ' + this.system + ' ' + this.cost + ' // ';
    }
  }
  
  let dell = new Computer('Dell', 'windows', 800);
  let apple = new Computer('Apple', 'MAC OS', 1700);
  
  console.log(String(dell)); // Dell
  console.log(+apple); // 1700
  console.log(dell + apple); // Dell windows 800 // Apple MAC OS 1700 //