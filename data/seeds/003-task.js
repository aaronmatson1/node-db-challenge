exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Drinking Water",
          notes: "Drink a gallon of water. Every. Day",
          completed: false,
          project_id: 2
        },
        {
          description: "First 45 minute Workout",
          notes: "Run first thing in the morning. Outside. Get it done.",
          completed: false,
          project_id: 3
        },
        {
          description: "Wim Hof Breathing Method",
          notes: "Breathe MotherF***ker!",
          completed: false,
          project_id: 1
        },
        {
          description: "Execute your daily and weekly goals",
          notes: "Create a schedule and STICK. TO. IT.",
          completed: false,
          project_id: 1
        },
        {
          description: "Second 45 Minute Workout",
          notes: "Pump some Iron bro. Get swol",
          completed: false,
          project_id: 2
        }
      ]);
    });
};