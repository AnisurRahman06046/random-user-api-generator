const Users = require("../models/user.model");

module.exports.getRandomUser = async (req, res) => {
  try {
    const randomNum = Math.floor(Math.random() * 100);
    // console.log(randomNum)
    const users = await Users.find();
    res.send(users[randomNum]);
  } catch (error) {
    console.log(error)
  }
};

module.exports.getAllRandomUsers = async(req, res) => {
  // let count = 0;

try {
    const limit = req.query.limit;
    const allUser = await Users.find()
    if(limit){
        console.log(limit);
        res.send(allUser.slice(0,limit))
    }
    
   
    res.send(allUser);
} catch (error) {
    
}
//   usersData.slice(0, limit)
};
