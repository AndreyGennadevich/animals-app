import React from "react";
import {
    BrowserRouter as Router, Link,
    Route,
    Routes
} from "react-router-dom";
import {NotFoundPage} from "./Pages/NotFoundPage";
import {LoginPage} from "./Pages/LoginPage";
import {TodayPage} from "./Pages/TodayPage";
import {AnimalsPage} from "./Pages/AnimalsPage";
import 'antd/dist/antd.css';
import {AuthorizedLayout} from "./Layout/AuthorizedLayout";
import {UnauthorizedLayout} from "./Layout/UnauthorizedLayout";
import {ROUTES} from "./helpers/routes";

function App() {

  return (

      <div>
        <Router>
            <Routes>
                <Route element={<AuthorizedLayout />}>
                    <Route path={ROUTES.today} element={<TodayPage/>}/>
                    <Route path={ROUTES.animals}  element={<AnimalsPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>

                <Route element={<UnauthorizedLayout />}>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </Router>
      </div>

  );
}

export default App;
