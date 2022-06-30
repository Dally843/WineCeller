const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  name:{type:String},
  des:{type:String},
  image:{type:String}
});
const Item = mongoose.model("Item", itemSchema);


let getAllList=()=>{
  return Item.find({})
}
let savePost = (data) =>{
  let post = new Item({
      name:data.name,
      des:data.des,
      image:data.image
  })
  post.save((error,result)=>{
    if(error){
        throw error
    }

})
return getAllList()

}
// let searchpost =function(data){
//   Item.find({name:{$regex:data.term,$options:"i"}}).exec()
// }

// let deletpost =function(data){
//   Item.delet({_id:data}).catch(error =>{
//       console.log('Error')
//   })
//   return getAllList()
  
// }





module.exports = {Item,savePost,getAllList }
// searchpost,deletpost