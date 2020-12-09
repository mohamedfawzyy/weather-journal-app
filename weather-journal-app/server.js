// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port=3000;
const server=app.listen(port,listenning);
function listenning(req,res){
  console.log(`server is listenning on port :${port}`);
};
//let add=[];
app.post('/projectData',callback);
function callback(req,res){
  //let newdata={};
  projectData['temperature']=req.body.temperature;
  projectData['date']=req.body.date;
  projectData['user response']=req.body['user response'];
  projectData['key']=req.body.key;
  res.send(projectData);
  console.log(projectData);
}
app.get('/all',getData);
function getData(req,res){
  res.send(projectData);
};
