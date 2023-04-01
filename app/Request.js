import React from "react";
var request = require('browser-request')
class getRequest extends React.Component{
  this.state()
  const request = require('browser-request')
request.get({uri:'https://api.genshin.dev/enemies'}, function (error, response, body) {
  console.error("error: ", error);
  console.log("statusCode: ", response && response.statusCode);
  console.log("body: ", body);
});
}
class getRequest extends React.Component{
  constructor(props) {
      super(props);
      this.state = {request : require('browser-request')} 
  }
  this.request.get({uri:'https://api.genshin.dev/enemies'}, function (error, response, body) {
  console.error("error: ", error);
  console.log("statusCode: ", response && response.statusCode);
  console.log("body: ", body);
});
  render() {
      return <div className="Container"> <Selector parentCallback = {this.handleCallback}/>

          <List dataFromParent = {this.state.whichList}/>
      </div>
  }
}
export {Container};