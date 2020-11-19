import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import AboutUs from './containers/AboutUs';
import NavigationBar from './components/NavigationBar';
import {Route} from 'react-router-dom'
import Contact from './containers/Contact'
import MonitoringEvaluation from './containers/MonitoringEvaluation'
import Projects from './containers/Projects'
import Publications from './containers/Publications'
function App() {


  return (
<<<<<<< HEAD
  <div>
    <NavigationBar/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={AboutUs}/>
      <Route path="/monitoringevaluation" component={MonitoringEvaluation}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/publications" component={Publications}/>
      <Route path="/contact" component={Contact}/>
  </div>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div> hello </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 8cd993ca3c256589f9b07f6003dbb3cbfbd2de90
  );
}

export default App;
