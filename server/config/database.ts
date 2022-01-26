import mongoose from 'mongoose'

const URI = process.env.MONGODB_URL

mongoose.connect(`${URI}`, {

},(err) => {
  if(err) {
    console.log("MongoDB Connection Failed 💥");
    process.exit(1);
  }
  console.log("MongoDB Connection Success 👍");
})
