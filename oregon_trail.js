(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            if (isHealthy === void 0) { isHealthy = true; }
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        // hunt(){ 
        //     let huntResult = getRandomIntInclusive(0, 1);
        //     if (huntResult == 1){
        //        this.food += 100;
        //     }
        //     return this.food;            
        //   };
        //reference:
        Traveler.prototype.hunt = function () {
            if (Math.random() > .5) {
                this.food += 100;
            }
            // return the traveler's food
            return this.food;
        };
        ;
        Traveler.prototype.eat = function () {
            this.food -= 20;
            if (this.food < 20) {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        ;
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        ;
        Wagon.prototype.addPassenger = function (Traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push();
                return "added";
            }
            return "sorry";
        };
        ;
        // addPassenger(traveler: Traveler): string {
        //     if this.capacity > this.passengerArray.length {
        //        this.passengerArray.push(traveler)
        //        return "added"
        //     }else{
        //        return "nope"
        //     }
        // }
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy == false) {
                    return true;
                }
            }
            return false;
        };
        ;
        //isQuarantined(): boolean {
        //      for(let i = 0; i < this.passengerArray.length; i++) {
        //          if(!this.passengerArray[i].isHealthy){
        //              return true;
        //              //if this is true, then someone's sick, and quarantine is necessary.
        //            }
        //      return false;
        //      //if false, then no one is sick.
        //      }
        //}
        Wagon.prototype.getFood = function () {
            var food = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                food = food + this.passengerArray[i].food;
            }
            return food;
        };
        ;
        return Wagon;
    }());
    // * Play the game
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    var Traveler1 = new Traveler(getRandomIntInclusive(0, 100), "John");
    var Traveler2 = new Traveler(getRandomIntInclusive(0, 100), "Paul");
    var Traveler3 = new Traveler(getRandomIntInclusive(0, 100), "George");
    var Traveler4 = new Traveler(getRandomIntInclusive(0, 100), "Ringo");
    var Traveler5 = new Traveler(getRandomIntInclusive(0, 100), "Maharishi Yogi");
    // * Make 3 of 5 the travelers eat by calling their eat methods
    // * Make the remaining 2 travelers hunt
    console.log(Traveler1.eat());
    console.log(Traveler2.eat());
    console.log(Traveler3.eat());
    console.log(Traveler4.hunt());
    console.log(Traveler5.hunt());
    // * Create wagon with an empty passenger list and a capacity of 4.
    var wagon = new Wagon(4);
    // * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // * of attempting to be being added to the wagon using the wagons addPassenger method.
    // * Run the isQuarantined method for the wagon    
    // * Run the getFood method for the wagon
    var ourTravelers = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5];
    ourTravelers.forEach(function (traveler, index) {
        if (Math.random() > .5) {
            console.log(wagon.addPassenger(traveler));
        }
    });
    console.log(wagon.isQuarantined());
    console.log(wagon.getFood());
    // * the return values of all the methods should be displayed in the console using console.log()
    // * the console.log statements should not live inside any methods on the objects 
})();
