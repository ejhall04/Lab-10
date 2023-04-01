
var test = [];
var request = require('browser-request')
request.get({uri:'https://api.genshin.dev/enemies'}, function (error, response, body) {
  console.error("error: ", error);
  console.log("statusCode: ", response && response.statusCode);
  console.log("body: ", body);
  test = body
})
function Request() {
   return( test.map((item) => { 
        return <div>{item}</div>}))
}
export default Request;