import mongoose from "mongoose";

export default mongoose.connect("mongodb://localhost/Supamenu")
 .then(() => console.log(`Connected to Supamenu DB Successfully`))
 .catch(err => console.log("Can't connect to mongodb" ,err))