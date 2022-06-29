const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  name:{type:String},
  des:{type:String},
  image:{type:String}
});
const Item = mongoose.model("Item", itemSchema);
let savePost = (data) =>{
  let post = new Item({
      name:data.name,
      des:data.des,
      image:data.image
  })
  return Item.insertMany(post) 
//     let query= post.savePost((error,result)=>{
//   if(error) {throw error}
//   else console.log(result)
// });

// return query
}



let getAllList=()=>{
  return Item.find({})
}
module.exports = {Item,savePost,getAllList}
// module.exports.savePost = savePost
// module.exports.getAllList = getAllList