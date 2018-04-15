var fs = require('fs');
var fileName="cities";
var fileExt="json";

fs.readFile("JSON/"+fileName+"."+fileExt,"utf8",function(err,data)
{
  if(err) console.error("\nCouldn't parse "+fileName+"."+fileExt+"\n");
  var content=JSON.parse(data);
  for(var i=0;i<content.cities.length;i++)
  {
    console.log("\nName: "+content.cities[i].name+",");
    console.log("Country: "+content.cities[i].country+",");
    console.log("Population: "+content.cities[i].population.toLocaleString("de-DE")); //Source: https://stackoverflow.com/questions/5731193/how-do-i-format-numbers-using-javascript
    console.log("-----------------------");
  }
});
