exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Drink Water",
          description: "Write a gallon of water a day",
          completed: false
        },
        {
          name: "Exercising",
          description: "Two 45 minute workouts. One of them has to be done outdoors",
          completed: false
        },
        {
          name: "Meditating",
          description: "Wim Hof method",
          completed: false
        }
      ]);
    });
};