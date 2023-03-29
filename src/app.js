const express=require("express")
const hbs=require("hbs")
const app=express()
const mongoose=require("mongoose")


//Database Connection
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Ashishshukla03:ashish123@cluster0.mkmznp0.mongodb.net/mernstack?retryWrites=true&w=majority")
        .then(()=>
    console.log("db connected")
).catch((err)=>{
    console.log("db not connected")
})

//routes
const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")
app.use("/teacher",teachRoutes);
app.use("/student",studRoutes);

//template engine=>"hbs"
app.set("view engine","hbs")
app.set("views","views")

//const teachRoutes = require("./routes/teacherRoutes")
//const studRoutes = require("./routes/studentRoutes")
//app.use("/teacher",teachRoutes);
//app.use("/student",studRoutes);

//app.use(express.static("public"))
//app.use('',routes)

//app.use(
    // Where "/scripts/js" is a folder into "public"
//    "/scripts/js", 
//    express.static(
 //       path.join(__dirname, "node_modules/bootstrap/dist/js")   ));


 //routes
app.get("/", (req, res) => {
    res.render("index");
  });

app.listen(process.env.PORT | 5556,()=>{
    console.log("server started");
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });