const express = require("express");
const serverResponses = require("../utils/helpers/responses");
const messages = require("../config/messages");
const { Comment } = require("../models/comments/comment");
const { Product } = require("../models/products/product");
const { User } = require("../models/users/user");

const routes = (app) => {
  const router = express.Router();
  // routes for comments
  router.post("/comments", (req, res) => {
    const comment = new Comment({
      text: req.body.text,
    });

    comment
      .save()
      .then((result) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.get("/comments", (req, res) => {
    Comment.find({}, { __v: 0 })
      .then((comments) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, comments);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.put("/comments/:id", (req, res) => {
    Comment.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
        },
      },
      { new: true }
    )
      .then((comment) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, comment);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.delete("/comments/:id", (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then((comment) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, comment);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });


  // routes for products
  router.post("/products", (req, res) => {
    const product = new Product({
      nombre: req.body.nombre,
      description: req.body.description,
      imgURL: req.body.imgURL,
    });

    product
      .save()
      .then((result) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });
  //get
  router.get("/products", (req, res) => {
    Product.find({}, { __v: 0 })
      .then((products) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, products);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });
  
  // routes for users
  router.post("/users", (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    user
      .save()
      .then((result) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  app.use("/api", router);
};
module.exports = routes;
  