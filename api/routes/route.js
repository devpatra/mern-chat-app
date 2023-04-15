const express = require("express");
const router = express.Router();
const  userController = require("../controllers/userController");
const  convController = require("../controllers/conversations");
const msgController = require("../controllers/messages");
const postController = require("../controllers/posts");


/*user router */
router.post("/register", userController.createUser);

router.post("/login", userController.loginUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.get("/", userController.getUserDetails);

router.get("/friends/userId", userController.getfriends);

router.put("/:id/follow", userController.followUser);

router.put("/:id/unfollow", userController.unfollowUser);


/*conversation router*/ 
router.post("/conversations", convController.createConv);

router.get("/conversations/:userId", convController.getConv);

router.get("/find/:firstUserId/:secondUserId", convController.getConvtwoUsers);


/* message routes */
router.post("/message", msgController.sendMessage);

router.get("/message/:conversationId", msgController.getMessage);


/* post routes */
router.post("/post", postController.createPost);

router.put("/post/:id", postController.updatePost);

router.get("/getpost/:id", postController.getPost);

router.delete("/delpost/:id", postController.deletePost);

router.put("/post/:id/like", postController.likePost);

router.get("/timeline/:userId", postController.getTimeline);

router.get("/profile/:username", postController.profile);

module.exports = router;

