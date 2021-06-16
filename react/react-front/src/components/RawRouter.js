import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "./Container";

const RawRouter = () => {
    return (
      <Router basename={"/"}>
  
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="*">
              <Container />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  };
  export default React.memo(RawRouter);