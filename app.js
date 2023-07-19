const bodyParser = require('body-parser');
const express=require('express');
const https=require('https');
const bodyparser=require('body-parser');
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    // const url="https://api.weatherapi.com/v1/current.json?key=8c8ad95a9d64461086d144041231107&q=London&aqi=no";
    // https.get(url,(response)=>{
    // // console.log(response.statusCode);
    // response.on("data",(data)=>{
    //   const weatherdata=JSON.parse(data);
    //   const tep=weatherdata.current.temp_c;
    //   const ic=weatherdata.current.condition.icon;
    // res.write("<h1>The weather in london "+tep+" degree celcius</h1>");
    // res.write("<img src="+ic+"></img>");
    res.sendFile(__dirname+"/index.html");
    // });
    // });
});
app.post("/",(req,res)=>{
    const query=req.body.cityname;
    // console.log("yes you did it");
      const url="https://api.weatherapi.com/v1/current.json?key=8c8ad95a9d64461086d144041231107&q="+query+"&aqi=no";
    https.get(url,(response)=>{
    // console.log(response.statusCode);
    response.on("data",(data)=>{
      const weatherdata=JSON.parse(data);
      const tep=weatherdata.current.temp_c;
      const ic=weatherdata.current.condition.icon;
    res.write("<h1>The weather in "+query+" "+tep+" degree celcius</h1>");
    res.write("<img src="+ic+"></img>");
    res.send();
   // res.sendFile(__dirname+"/index.html");
    });
    });
});
app.listen(port,(req,res)=>{
 console.log("the server is running at 3000 port");
});
