var fs=require('fs');
var color=require('chalk');
var directory="JSON";
var fileName="cities";
var fileExt="json";

fs.readFile(directory+"/"+fileName+"."+fileExt,"utf8",function(err,data)
{
  if(err) console.error("\nCouldn't parse "+fileName+"."+fileExt+"\n");
  var content=JSON.parse(data);
  for(var i=0;i<content.cities.length;i++)
  {
    console.log(color.underline(color.red("\nName: "))+color.bgRed(color.green(content.cities[i].name))+",");
    console.log(color.underline(color.green("Country: "))+color.bgGreen(color.red(content.cities[i].country))+",");
    console.log(color.underline(color.blue("Population: "))+color.bgBlue(color.yellow(content.cities[i].population.toLocaleString("de-DE")))); //Source: https://stackoverflow.com/questions/5731193/how-do-i-format-numbers-using-javascript
    console.log("-----------------------");
  }
});
