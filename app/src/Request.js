import { useEffect, useState } from 'react';
function Request() {
  const [posts, setPosts] = useState([]);
useEffect (() => {
  names()
}, [])

const names = () => {
  var request = require('browser-request')
  request.get({uri:'https://api.genshin.dev/enemies'}, function (error, response, body) {
  console.error("error: ", error);
  console.log("statusCode: ", response && response.statusCode);
  console.log("body: ", body);
  setPosts(body);
  })
}
return (posts)
}
export default Request;