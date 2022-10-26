const router = require('express').Router();
const postController = require('../controllers/post.controller');
const auth = require('../middleware/auth.middleware');
const multer = require('multer');
const upload = multer();

//post
router.get("/",auth.checkUser, postController.readPost);
router.post("/",auth.checkUser, upload.single('file'), postController.createPost);
router.put("/:id",auth.checkUser, upload.single('file'), postController.updatePost);
router.delete("/:id",auth.checkUser, postController.deletePost);
router.patch("/like-post/:id",auth.checkUser, postController.likePost);
router.patch("/unlike-post/:id",auth.checkUser, postController.unlikePost);

// comments
router.patch("/comment-post/:id",auth.checkUser, postController.commentPost);
router.patch("/edit-comment-post/:id",auth.checkUser, postController.editCommentPost);
router.patch("/delete-comment-post/:id",auth.checkUser, postController.deleteCommentPost);

module.exports= router;