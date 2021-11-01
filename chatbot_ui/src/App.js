import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import BackFrameBody from './components/BackFrame/backframeBody';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={ () => {
                      return (
                          <Redirect to="/homepage"/>
                      );
                  }} />
          <Route path="/homepage" component={Homepage}/>
          <Route path="/backframebody" component={BackFrameBody} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
