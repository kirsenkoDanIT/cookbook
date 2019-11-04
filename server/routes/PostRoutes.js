import Router from "express";
import PostController from "../controllers/PostController";

const router = Router();
const Post = new PostController();

router.get("/posts", Post.all);
router.get("/posts/:id", Post.one);
router.post("/posts", Post.create);
router.put("/posts", Post.update);
router.delete("/posts/:id", Post.delete);

module.exports = router;
