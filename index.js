        var arr=[];
        import express from "express";
        import BodyParser  from "body-parser";
        const app=express();
        app.use(BodyParser.urlencoded({extended:true}));
        const port=3000;
        app.use(express.static("public"));
        app.listen(port,function(req,res){
          console.log("Server Started");
        });
        app.get("/",function(req,res){
            res.render("index.ejs");
        });
        app.post("/submit",function(req,res){
            arr.push(req.body.newItem);
            console.log(arr);
            let date = new Date();

        let year = date.getFullYear(); 
        let dateNumber = date.getDate(); 

        let weekdayNumber = date.getDay(); 

        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let weekday = weekdays[weekdayNumber];
        let monthNumber = date.getMonth(); 
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[monthNumber];
            res.render("index.ejs",{value:arr,yea:year,date:dateNumber,week:weekday,m:month});
        });