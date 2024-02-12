// const { default: mongoose } = require("mongoose");

// const dbConnect = () => {
//   try {
//     const DB = process.env.MONGO_ATLAS.replace(
//       "<password>",
//       process.env.DATABASE_PASSWORD
//     );

//     //CONNECTING DATABASE
//     mongoose
//       .connect(DB, {
//         useNewUrlParser: true,
//       })
//       .then(() => console.log("DB connection successful"));
//   } catch (error) {
//     console.log("DATBASE ERROR!!");
//   }
// };

// module.exports = dbConnect;
const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log('CONNECTED TO DATABASE SUCCESSFULLY');
    } catch (error) {
        console.log("DATABASE ERROR!!");
    }
    
}

module.exports = dbConnect;