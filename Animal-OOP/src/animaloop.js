class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      return "<<<Sound>>>";
    }
  
    eat() {
      return this.name + " eats";
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    sound() {
      return "Cat meows";
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
    sound() {
      return "Dog barks";
    }
  }
  
  class Home {
    constructor(petList = []) {
      this.petList = petList;
    }
  
    adoptPet(pet) {
      this.petList.push(pet);
    }
  
    makeAllSounds() {
      for (let i = 0; i < this.petList.length; i++) {
        console.log(this.petList[i].sound());
      }
    }
  }
  
  let cat1 = new Cat();
  cat1.name = "Stormy";
  
  let dog = new Dog();
  dog.name = "Rax";
  
  var home = new Home();
  var dog1 = new Dog();
  var dog2 = new Dog();
  var cat = new Cat();
  
  home.adoptPet(dog1);
  home.adoptPet(cat);
  home.adoptPet(dog2);
  
  home.makeAllSounds();