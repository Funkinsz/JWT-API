// mongoose nous permet d'interagir avec la BDD mongo DB
const mongoose = require('mongoose')

mongoose
    .connect("mongodb+srv://jean-michel:123@funkins.jhcargs.mongodb.net/jwt?retryWrites=true&w=majority")
    .then(() => {
    console.log("CONNEXION DB OK");
}).catch((e) => {
    console.error("CONNECTION DB KO", e);
})