const request= require('request');

var getLocation=(address,callback)=>{
  var encodedLocation= encodeURIComponent(address);


  request({url:`http://www.mapquestapi.com/geocoding/v1/address?key=HuMDGT1WAX1SUtV69pjko266PT73cb1h&location=${encodedLocation}`,
  json: true},(error, response, body)=>{

  if(error || body.results===undefined){
    callback('could not connect to mapquest server');

  }

  else{
    callback(undefined,{
    Address: body.results[0].locations[0].adminArea5+ ' ' + body.results[0].locations[0].adminArea3+ ' ' + body.results[0].locations[0].adminArea1+ ' ' + body.results[0].locations[0].postalCode,
    Latitude: body.results[0].locations[0].displayLatLng.lat,
    Longitude: body.results[0].locations[0].displayLatLng.lng

  });

}
  });

}

module.exports.getLocation=getLocation;
