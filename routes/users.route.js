const express = require("express");
const {
  getRandomUser,
  getAllRandomUsers,
} = require("../controllers/users.controller");
const router = express.Router();

router
  /***
   * @GET-http://localhost:5000/user/random : to get a random user
   */
  .get("/user/random", getRandomUser)

  /***
   * @GET-http://localhost:5000/user/all?limit=2 - to get a limited number of user
   * @GET- http://localhost:5000/user/all - to get all the users
   */
  .get("/user/all", getAllRandomUsers);

module.exports = router;
