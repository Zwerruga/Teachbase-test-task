import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
const Login = React.lazy(() => import("./pages/login.jsx"));
const Register = React.lazy(() => import("./pages/register.jsx"));
const Home = React.lazy(() => import("./pages/home.jsx"));

function App() {
  return (
    <div class="wrapper">
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
