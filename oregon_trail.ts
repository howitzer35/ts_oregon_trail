(function(){


    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;


    }

    //interface describing what the passenger array should look like

    // interface IPassengerArray {
    //     [index:number]:Traveler
    // }

    //interface describing attributes and methods a wagon should have
    interface IWagon{
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        constructor(food: number, name: string, isHealthy: boolean = true) {
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
        hunt(): number {
          if(Math.random() > .5) {
                this.food += 100
             }
            // return the traveler's food
            return this.food
        };
        
        eat() {
            this.food -= 20;
            if (this.food < 20) {
              this.isHealthy = false;
            }
            return this.isHealthy;
          };

          //reference:
          //eat(): boolean {
                //if(this.food >= 20) {
                    //this.food -= 20;
                //}else{
                    //this.isHealthy = false;
                //}
                //return this.Healthy;
          //};

    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[] = [];

        constructor(capacity: number) {
            this.capacity = capacity;
        };

        addPassenger(Traveler: ITraveler) {
            if (this.passengerArray.length < this.capacity) {
               this.passengerArray.push();
               return "added"
            }
            return "sorry"
        };


        // addPassenger(traveler: Traveler): string {
        //     if this.capacity > this.passengerArray.length {
        //        this.passengerArray.push(traveler)
        //        return "added"
        //     }else{
        //        return "nope"
        //     }
        // }
        

        isQuarantined() {
        for (let i=0; i < this.passengerArray.length; i++){
            if (this.passengerArray[i].isHealthy == false) {
              return true;
            }
          }
          return false;
        };


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

    
        getFood() {
            let food = 0;
            for (let i = 0; i < this.passengerArray.length; i++) {
                food = food + this.passengerArray[i].food;
            }
            return food;
        };
        

        //getFood(): number {
        //  let totalFood = 0
        //  for(let i = 0; i <this.passenegerArray.length; i++){
        //     totalFood = totalFood + this.passengerArray[i].food; 
        //   }
        //   //if we made it to this point, it's all good, and we can continue
        //   return totalFood;
        // };
        
    }

    
    // * Play the game

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    
    let Traveler1 = new Traveler(getRandomIntInclusive(0, 100), "John");
    let Traveler2 = new Traveler(getRandomIntInclusive(0, 100), "Paul");
    let Traveler3 = new Traveler(getRandomIntInclusive(0, 100), "George");
    let Traveler4 = new Traveler(getRandomIntInclusive(0, 100), "Ringo");
    let Traveler5 = new Traveler(getRandomIntInclusive(0, 100), "Maharishi Yogi");


    // * Make 3 of 5 the travelers eat by calling their eat methods

    // * Make the remaining 2 travelers hunt
    
    
    console.log(Traveler1.eat());
    console.log(Traveler2.eat());
    console.log(Traveler3.eat());

    console.log(Traveler4.hunt());
    console.log(Traveler5.hunt());

    
    // * Create wagon with an empty passenger list and a capacity of 4.
    
    let wagon = new Wagon (4);

    // * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    // * of attempting to be being added to the wagon using the wagons addPassenger method.
    
    // * Run the isQuarantined method for the wagon    

    // * Run the getFood method for the wagon
    

    let ourTravelers = [Traveler1, Traveler2, Traveler3, Traveler4, Traveler5]
    
            ourTravelers.forEach(function(traveler, index){
                if(Math.random() > .5){
                    console.log(wagon.addPassenger(traveler))
                }
            });
    
            console.log(wagon.isQuarantined());
    
            console.log(wagon.getFood())

    // * the return values of all the methods should be displayed in the console using console.log()
    // * the console.log statements should not live inside any methods on the objects 


})();