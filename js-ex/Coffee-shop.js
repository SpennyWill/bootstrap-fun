var coffeeShop = {
  beans: 40,
  
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  const buyBeans () => {
    this.drinkRequirements
  }
  makeDrink: function(drinkType) {
    if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
      alert (`Sorry, we don't make ${drinkType}`);
    }
      let beansRequired = this.drinkRequirements[drinkType];
      let beanTotal = this.beans - beansRequired; 
        
      if (beanTotal >= 0) {
        this.beans -= beansRequired; 
        console.log(`Here is your ${drinkType}. Enjoy!`);
        } else {
          alert("Sorry, we're all out of beans!");
        }
  }
};

coffeeShop.makeDrink('latte');
console.log(makeDrink); 