import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import Navbar from "./Components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact to='/signin' component={SignIn} />
        <Route exact to='/signup' component={SignUp} />
        <Route to='/'>
          <Redirect to='/signin' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
