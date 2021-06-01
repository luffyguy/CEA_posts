import Create from './components/Create';
import Allposts from './components/Allposts';
import Dislikedposts from './components/Dislikedposts'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      {/* navbar */}
      <Switch>
        
        <Route exact path="/">
          <Create/>
        </Route>  
        <Route exact path="/show">
          <Allposts/>
        </Route>
        
        <Route exact path="/disliked">
          <Dislikedposts/>
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
