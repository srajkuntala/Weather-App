const yargs= require('yargs');
const location= require('./location.js')
const weather= require('./weather.js')
const argv= yargs
  .options({
    a:{
      demand: true,
      alias:'address',
      description:'Address to featch the weather',
      string: true
    }
  })
  .help().
  alias('help','h')
  .argv;
  location.getLocation(argv.a,(errorMessage,results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }
    else{

      console.log((JSON.stringify(results.Address.trim(),undefined,2)));
      weather.getWeather(results.Latitude,results.Longitude,(errorMessage,results)=>{
        if(errorMessage){
          console.log(errorMessage);
        }
        else{
          console.log(JSON.stringify(results,undefined,2));
        }
      });
    }

  });
