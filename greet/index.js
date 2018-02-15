var english = require("./english.js");
var spanish = require("./spanish.js");
//Module exports statement runs only once as it will be cached for the second time.
//To not to get the cached response we have to create a new object using new keyword.
module.exports = {
    englis : english,
    spanis : spanish
}