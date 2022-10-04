import express from "express";
import {server, port} from "./server.js";
import {MainRoutes} from "../routes/mainRoutes";
import ejsLayouts from "express-ejs-layouts";


//Template Engine
server.use(ejsLayouts);
server.set("layout", "layouts/html");
server.set("view engine", "ejs");

//Statische Files laden
server.use(express.static("views/public"));

//Middleware
server.use(express.urlencoded({extended: true}))


//Serverrouten
server.use("/", MainRoutes);



// Server wird gestartet
server.listen(port,() => {
    console.log("Server ist gestartet");
});