const pdo = require("../database/db.js");

class BlogModel {
    constructor(id, title, content, created_at, updated_at){
        this.id = id;
        this.title = title;
        this.content = content;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static fetchBlogs(){
        let stmt = "SELECT * FROM posts ORDER BY created_at DESC"
        let fetch = pdo.execute(stmt);
        return fetch;
    }

    static fetchBlog(id){
        let stmt = `SELECT * FROM posts WHERE id = ${id}`;
        let fetch = pdo.execute(stmt);
        return fetch;
    }

}


module.exports = BlogModel;