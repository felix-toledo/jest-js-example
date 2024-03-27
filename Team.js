class Team {

     constructor(name, budget) {
          this.name = name;
          this.budget = budget;
     }

     purchase(ammount) {
          this.budget -= ammount;
          return this.budget;
     }
}

module.exports = Team;