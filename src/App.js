import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// switch는 한번에 하나의 라우트만 렌더링 하기위해서 사용 라우터는 2개 이상 랜더링 가능 

function App() {
  return <Router>
    <Switch> 
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home />
      </Route>

    </Switch>

  </Router>;
}

export default App;
 