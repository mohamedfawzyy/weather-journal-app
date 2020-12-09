/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=4a64f82414cc04d7cd44a728f5f20577';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
  //get Async
const retrieveData=async(baseURL,zipcode,apiKey)=>{
    const request=await fetch(baseURL+zipcode+apiKey)

    try{
        const data=await request.json();
        return data;
    }catch(error){
        console.log(error);
    }
  }

  //post Async

const postData=async(url,data={})=>{

  const response=await fetch(url,{

    method:'post',
    credentials:'same-origin',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
  });
  try{
      let newdata=await response.json();
    //  return newdata;
  }catch(error){
      console.log(error);
  }
}

  //event listener
document.getElementById('generate').addEventListener('click',onclick);
function onclick(){
        let zipcode=document.getElementById('zip').value;
        let user_response=document.getElementById('feelings').value;
        retrieveData(baseURL,zipcode,apiKey)
        .then(function(data){
          let temp=data['main'].temp;
          //key is the city name
          let key=data['name'];
        // console.log(zipcode,user_response,newDate,temp);
         postData('/projectData',{temperature:temp,date:newDate,'user response':user_response ,key:key})
        })
        .then(
          setTimeout(updateUI,3000)
        )
      };

const updateUI=async()=>{
  const request=await fetch('/all');
  try{
        const alldata=await request.json();
        document.getElementById('date').innerHTML='date: '+alldata['date'];
        document.getElementById('temp').innerHTML='temp: '+alldata['temperature'];
        document.getElementById('content').innerHTML='user_input: '+alldata['user response'];
        document.getElementById('key').innerHTML='city: '+alldata['key'];

  }catch(error){
  console.log(error);
}
}
