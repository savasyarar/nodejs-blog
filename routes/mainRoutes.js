import express from "express";
export let MainRoutes = express.Router();
import {pdo} from "../database/db.js";

const BlogController = require("../databaseControllers/blogController");

MainRoutes.route("/start").get(BlogController.getPosts, (req,res)=> {});

MainRoutes.route("/blog/:id").get(BlogController.getPost, (req, res) => {})


MainRoutes.get("/me", (req,res)=> {
    res.render("main/me", {
        title: "@me"
    })
})

MainRoutes.get("/contact", (req, res) => {
    res.render("main/contact", {
        title: "Kontakt"
    })
})

MainRoutes.get("/imprint", (req, res) => {
    res.render("main/imprint", {
        title: "Impressum"
    })
})

MainRoutes.get("/", (req, res) => {
    res.redirect("/start");
})