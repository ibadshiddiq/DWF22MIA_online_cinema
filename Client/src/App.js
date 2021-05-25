// import { useContext, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { UserContext } from "./components/context/userContext";

// import { QueryClient, QueryClientProvider } from "react-query";
// // import PrivateRoute from "./components/service/PrivateRoute";

// import { API, setAuthToken } from "./components/config/api";

// import Navbar from "./components/Navbar";
// // import Home from "./components/Home";

// // import Detail from "./components/pages/Detail";
// // import View from "./components/pages/View";
// // import Profile from "./components/pages/Profile";
// // import Fund from "./components/pages/Fund";
// // import Form from "./components/pages/Form";
// // import Logout from "./components/service/Logout";

// // import NotFound from "./components/NotFound";
// // import UpdateProfile from "./components/pages/UpdateProfile";
// // import UpdateForm from "./components/pages/UpdateForm";

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

// function App() {
//   const [, dispatch] = useContext(UserContext);
//   const queryClient = new QueryClient();

//   const authUser = async () => {
//     try {
//       const response = await API.get("/userss");
//       if (response.status === 404) {
//         return dispatch({
//           type: "failed",
//         });
//       }

//       let payload = response.data.data.user;
//       payload.token = localStorage.token;

//       dispatch({
//         type: "success",
//         payload,
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: "failed",
//       });
//     }
//   };

//   useEffect(() => {
//     authUser();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <Navbar />
//         {/* <Switch>
//           <Route exact path="/" component={Home} />
//           <PrivateRoute exact path="/fund" component={Fund} />
//           <PrivateRoute exact path="/form" component={Form} />
//           <PrivateRoute exact path="/updateform/:id" component={UpdateForm} />
//           <PrivateRoute exact path="/detail/:id" component={Detail} />
//           <PrivateRoute exact path="/view/:id" component={View} />
//           <PrivateRoute exact path="/profile/:id" component={Profile} />
//           <PrivateRoute
//             exact
//             path="/updateprofile/:id"
//             component={UpdateProfile}
//           />
//           <PrivateRoute exact path="/logout" component={Logout} />
//           <Route>
//             <NotFound />
//           </Route>
//         </Switch> */}
//       </Router>
//     </QueryClientProvider>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./components/context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";

// import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

import Home from "./components/pages/HomePage";
// import FilmList from './pages/FilmList/FilmList';
// import AddFilm from './pages/AddFilm/AddFilm';
// import FilmDetails from './pages/FilmDetails/FilmDetails';
// import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            {/* <PrivateRoute path='/film-list' exact component={FilmList}></PrivateRoute>
          <PrivateRoute path='/add-film' exact component={AddFilm}></PrivateRoute> */}
            {/* <PrivateRoute
              path="/films/:id"
              exact
              component={FilmDetails}
            ></PrivateRoute> */}
            {/* <PrivateRoute path='/profile' exact component={Profile}></PrivateRoute> */}
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
