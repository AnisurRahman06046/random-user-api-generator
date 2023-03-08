const express = require("express");
const {
  getRandomUser,
  getAllRandomUsers,
  saveAuser,
  deleteAUser,
  updateAUser,
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
  .get("/user/all", getAllRandomUsers)

  /***
   * @POST-http://localhost:5000/user/save : to save a user in db
   */
  .post("/user/save", saveAuser)

  /***
   * @DELETE-http://localhost:5000/user/delete/${id} - to delete a user
   */
  .delete("/user/delete/:id", deleteAUser)

  /***
   * @PATCH- http://localhost:5000/user/update/${id} - to update a user
   */
  .patch("/user/update/:id", updateAUser);

module.exports = router;
