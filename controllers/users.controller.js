const Users = require("../models/user.model");

module.exports.getRandomUser = async (req, res) => {
  try {
    const randomNum = Math.floor(Math.random() * 100);
    // console.log(randomNum)
    const users = await Users.find();
    res.send(users[randomNum]);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getAllRandomUsers = async (req, res) => {
  // let count = 0;

  try {
    const limit = req.query.limit;
    const allUser = await Users.find();
    if (limit) {
      console.log(limit);
      res.send(allUser.slice(0, limit));
    }

    res.send(allUser);
  } catch (error) {}
};


module.exports.saveAuser=async(req,res)=>{

    try {
        const newUser = new Users({
            name:req.body.name,
            gender:req.body.gender,
            contact:req.body.phone,
            address:req.body.address,
            photoUrl:req.body.picture
        });
        if(!newUser || !req.body.name || !req.body.gender || !req.body.phone || !req.body.address || !req.body.picture){
            res.status(401).send({message:'no empty field is acceptable'})
        }
        await newUser.save()
        res.send(newUser)

    } catch (error) {
        res.send({message:'error'})
    }
  
}

module.exports.deleteAUser=async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        await Users.deleteOne({_id:id})
        res.send({message:'user is deleted'})
    } catch (error) {
        res.status(401).send(error.message)
    }
}


module.exports.updateAUser=async(req,res)=>{
    try {
        const user = await Users.findOne({_id:req.params.id})
        user.name=req.body.name,
        user.gender=req.body.gender,
        user.contact=req.body.phone,
        user.address=req.body.address,
        user.photoUrl=req.body.picture
        // const newUser = new Users({
        //     name:req.body.name,
        //     gender:req.body.gender,
        //     contact:req.body.phone,
        //     address:req.body.address,
        //     photoUrl:req.body.picture
        // });
        // if(!newUser || !req.body.name || !req.body.gender || !req.body.phone || !req.body.address || !req.body.picture){
        //     res.status(401).send({message:'no empty field is acceptable'})
        // }
        await user.save()
        res.send(user)

    } catch (error) {
        res.send({message:'error'})
    }
}