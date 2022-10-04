const BlogModel = require("../databaseModels/blogModel.js");

exports.getPosts = async (req, res, next) => {
    try {
        const fetchPosts = await BlogModel.fetchBlogs();
        res.render("main/start", {
            layout: "layouts/html",
            title: "S.Yarar - Blogübersicht",
            posts: fetchPosts[0]
        });
        next();
    } catch(err){
        console.log(err.message);
    }
}


exports.getPost = async (req, res, next) => {
    try {
        let fetchId = req.params.id;
        const fetchPost = await BlogModel.fetchBlog(fetchId);
        res.render("main/blog", {
            layout: "layouts/html",
            post: fetchPost[0],
        })
        next();
    } catch (err) {
        console.log(err.message);
    }
}

