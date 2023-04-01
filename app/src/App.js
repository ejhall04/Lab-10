import './App.css';
import {Container} from './Container.js'
import Request from './Request';
var test = [];




function App() {
  return (
    <div className="App">
      <header className="App-header">
        Which are you?
        <Container/>
        <Request/>
        <div>
          {test}
        </div>
      </header>
    </div>
  );
}
export default App;


