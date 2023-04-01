class Greeter {
    constructor(name) {
      
      this.name = name;
      
    }
    Greet () {
        console.log(`Hello ${this.name}!`);
        
    }

}
const greeter1 = new Greeter("Zhenya");



class FancyGreeter extends Greeter {
    FancyGreet () {
        console.log(`Hello ${this.name}, nice to see you!`);
    }
    Greet () {
        //console.log(super.Greet());
        super.Greet();
        console.log("nice to see you");
    }
}

const fancyGreeter1 = new FancyGreeter("Kirill");

fancyGreeter1.Greet();

