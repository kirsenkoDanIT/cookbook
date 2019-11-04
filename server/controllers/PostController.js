import Post from "../models/Post";

class PostController {
  all(req, res) {
    try {
      Post.find()
        .sort("-date")
        .then(posts => {
          res.json(posts);
        });
    } catch (err) {
      res.json({ errMsg: "error" });
      console.log(err);
    }
  }

  one(req, res) {
    try {
      Post.findOne({ _id: req.params.id }).then(post => {
        res.json(post);
      });
    } catch (err) {
      res.json({ errMsg: "error" });
      console.log(err);
    }
  }

  create(req, res) {
    const { title, description, ingredients, method } = req.body;
    if (!title || !description) {
      return res.status(403).json({ errMsg: "error" });
    }
    try {
      new Post({
        title,
        description,
        ingredients,
        method
      }).save(err => {
        err
          ? res.status(500).json({ errMsg: "error" })
          : res.json({ msg: "created" });
      });
    } catch (err) {
      res.json({ errMsg: "error" });
      console.log(err);
    }
  }

  update(req, res) {
    const { title, description, ingredients, method, archive } = req.body;
    if (!title || !description) {
      return res.status(403).json({ errMsg: "error" });
    }
    try {
      Post.findOneAndUpdate(
        {
          _id: req.body._id
        },
        {
          title,
          description,
          ingredients,
          method,
          archive
        },
        err => {
          err
            ? res.status(500).json({ errMsg: "error" })
            : res.json({ msg: "updated" });
        }
      );
    } catch (err) {
      res.json({ errMsg: "error" });
      console.log(err);
    }
  }

  delete(req, res) {
    try {
      Post.deleteOne(
        {
          _id: req.params.id
        },
        err => {
          err
            ? res.status(500).json({ errMsg: "error" })
            : res.json({ msg: "deleted" });
        }
      );
    } catch (err) {
      res.json({ errMsg: "error" });
      console.log(err);
    }
  }
}

module.exports = PostController;
