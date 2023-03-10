"use strict";

const {
  db,
  models: { User },
} = require("../InviteGo/server/database/database");
// const Product = require('../server/db/models/Product');


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log("db synced!");
  
    // Creating Users
    const users = await Promise.all([
      User.create({ 
      username: "carlosz",
      name: "carlos",
      last_name: "z",
      password: "123",
      email: "lcz.market@gmail.com",
      phone: 281-330-8004,

    }),
      User.create({ 
        username: "leeroy", 
        password: "123",
        name: "leeroy",
        last_name: "jenkins",
        password: "123",
        email: "leeroy_bruce@gmail.com",
        phone: 281-330-8004,
    }),
    ]);

    const calendarTask = await Promise.all([
        task.create({
          brand: "apple",
          model: 'iphone5' ,
          price: "50",
          description: "simple description to be input here about Google",
          imageURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202842000",
        }),
        task.create({
            brand: "apple",
            model: 'iphone5' ,
            price: "50",
            description: "simple description to be input here about Google",
            imageURL: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202842000",
        })
      ])
      
      //create retro 
      const contacts = await Promise.all([
        contact.create({
          brand: "Motorola", 
          model: "RAZR V3",
          price: "39",
          description: "simple description to be input here about Google",
          imageURL: "https://www.cnet.com/a/img/resize/994f3af7074e239d021cf2c565c4c00d26ac1f66/hub/2018/03/13/3b3668c7-bc16-42a5-84e1-dad42bb9db2b/motorola-razr-v3-8768.jpg?auto=webp&fit=crop&height=675&width=1200",
        }),    
      ])

      const androids = await Promise.all([
          Product.create({
            brand: 'Samsung',
            model: 'Galaxy S23 Ultra',
            price: '1380',
            description: 'simple description to be input here about Samsung',
            // imageURL: 'https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png',
            imageURL: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Galaxy_S23_Ultra_concept_dimensions_display_specs_S23_S23_plus_drdNBC_6.jpg',
          }),
      ]);
    
    
      console.log(`seeded ${users.length} users`);
      console.log(`seeded ${calendarTask.length} iphones`);
      console.log(`seeded ${androids.length} androids`);
      console.log(`seeded ${retro.length} retro phones`);
      console.log(`seeded successfully`);
      return {
        users: {
          cody: users[0],
          murphy: users[1],
        },
      };
    }
    
    /*
     We've separated the `seed` function from the `runSeed` function.
     This way we can isolate the error handling and exit trapping.
     The `seed` function is concerned only with modifying the database.
    */
    async function runSeed() {
      console.log("seeding...");
      try {
        await seed();
      } catch (err) {
        console.error(err);
        process.exitCode = 1;
      } finally {
        console.log("closing db connection");
        await db.close();
        console.log("db connection closed");
      }
    }
    
    /*
      Execute the `seed` function, IF we ran this module directly (`node seed`).
      `Async` functions always return a promise, so we can use `catch` to handle
      any errors that might occur inside of `seed`.
    */
    if (module === require.main) {
      runSeed();
    }
    
    // we export the seed function for testing purposes (see `./seed.spec.js`)
    module.exports = seed;