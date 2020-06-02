exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Benefits of Drinking water", description: "It lubricates the joints, forms saliva and mucus, delivers oxygen throughout the body, cushions the brain, spinal cord, and other sensitive tissues." },
        { name: "RunningWorld", description: "If It doesnt challenge you, it doesnt change you!" },
        { name: "Wim Hof Breathing and Mediation Method", description: "THE WIM HOF METHOD CAN BE DEFINED BY ITS SIMPLE, EASY-TO-APPLY APPROACH AND ITS STRONG SCIENTIFIC FOUNDATION. IT’S A PRACTICAL WAY TO BECOME HAPPIER, HEALTHIER AND STRONGER." },
        { name: "75Hard", description: "A 75-day Tactical Guide to winnig the war with yourself." }
      ]);
    });
};