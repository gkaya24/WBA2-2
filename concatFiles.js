var fs = require('fs');
var fileName1="cities";
var fileName2="moreCities";
var fileExt="json";
var concatCities=[];

fs.readFile("JSON/"+fileName1+"."+fileExt,"utf8",function(err,data)
{
  if(err) console.error("\nCouldn't parse "+fileName+"."+fileExt+"\n");

  var temp=JSON.parse(data);

  fs.readFile("JSON/"+fileName2+"."+fileExt,"utf8",function(err,data2)
  {
    if(err) console.error("\nCouldn't parse "+fileName+"."+fileExt+"\n");

    var temp2=JSON.parse(data2);
    concatCities=temp.cities.concat(temp2.cities);

    for(var i=0;i<concatCities.length;i++)
    {
      console.log("\nName: "+concatCities[i].name+",");
      console.log("Country: "+concatCities[i].country+",");
      console.log("Population: "+concatCities[i].population.toLocaleString("de-DE")); //Source: https://stackoverflow.com/questions/5731193/how-do-i-format-numbers-using-javascript
      console.log("-----------------------");
    }
  });
});
