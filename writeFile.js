var fs=require('fs');
var color=require('chalk');
var directory="JSON";
var fileName="cities";
var destName=fileName+"Sorted";
var fileExt="json";

fs.readFile(directory+"/"+fileName+"."+fileExt,"utf8",function(err,data)
{
  if(err) console.error("\nCouldn't parse "+fileName+"."+fileExt+"\n");
  var content=JSON.parse(data);
  var destData=content.cities.sort(function(a, b)
  {
    return a.population - b.population;
  });

  fs.writeFile("JSON/"+destName+"."+fileExt, JSON.stringify(destData), (err) =>
  {
    if(err) console.error("Couldn't write "+destName+"."+fileExt+"\n");
    console.log("\nThe file "+destName+".json was saved successfully!");
   });
});

fs.readFile("JSON/"+destName+"."+fileExt,"utf8",function(err,data)
{
  if(err) console.error("\nCouldn't parse "+fileName+"."+fileExt+"\n");

  var content=JSON.parse(data);
  for(var i=0;i<content.length;i++)
  {
    console.log("\nName: "+content[i].name+",");
    console.log("Country: "+content[i].country+",");
    console.log("Population: "+content[i].population.toLocaleString("de-DE")); //Source: https://stackoverflow.com/questions/5731193/how-do-i-format-numbers-using-javascript
    console.log("-----------------------");
  }
});
