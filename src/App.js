import Navbar from './Navigation/Navbar'
import Create from './components/Create';
import Allposts from './components/Allposts';
import Dislikedposts from './components/Dislikedposts'
import Likedposts from './components/Likedposts'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
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
        
        <Route exact path="/liked">
          <Likedposts/>
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
