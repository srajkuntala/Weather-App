const request= require('request');

var getWeather= (latitude,longitude,callback)=>{
  request(
    {
      url: `https://api.darksky.net/forecast/#key/${latitude},${longitude}`,
      json: true

    },(error,response,body)=>{
           if(!error && response.statusCode===200){
             callback(undefined,{
               CurrentTemperature: body.currently.temperature,
               CurrentApparentTemperature: body.currently.apparentTemperature

             })

           }
         else{
               callback('unable to connect to forecast.io');

           }
    }
  );

}

module.exports.getWeather=getWeather;
