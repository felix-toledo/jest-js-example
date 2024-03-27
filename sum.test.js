const Team = require('./Team.js');

test('When I create a team and make a purchase, the budget should rest', () => {
     const team = new Team("River", 20);
     team.purchase(5);
     expect(team.budget).toBe(15);
});