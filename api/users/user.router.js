const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  registerEvent
} = require("./user.controller");

const sendMail = require("./sendMailController.js")
//do not require token
router.post("/create", createUser);
router.post("/login", login);

//require token
router.get("/getAllUsers", getUsers);
router.get("/getById/:id", checkToken, getUserByUserId);
router.patch("/updateUserById", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

//send mail
router.post("/sendMail", sendMail);

//register event
router.post("/registerEvent", registerEvent);

module.exports = router;
