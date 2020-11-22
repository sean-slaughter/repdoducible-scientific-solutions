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
import Services from './containers/Services'
function App() {


  return (

  <div>
    <NavigationBar/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={AboutUs}/>
      <Route path="/monitoringevaluation" component={MonitoringEvaluation}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/publications" component={Publications}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/services" component={Services}/>
  </div>
  );
}

export default App;
