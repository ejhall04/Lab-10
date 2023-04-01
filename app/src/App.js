import './App.css';
import {Container} from './Container.js'
var test = [];


var request = require('browser-request')
request.get({uri:'https://api.genshin.dev/enemies'}, function (error, response, body) {
  console.error("error: ", error);
  console.log("statusCode: ", response && response.statusCode);
  console.log("body: ", body);
  test = body
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Which are you?
        <Container/>
        <div>
          {test}
        </div>
      </header>
    </div>
  );
}
export default App;


