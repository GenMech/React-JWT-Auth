import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import AuthContext from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout(); // by this we are not redirecting our pages so for that we going to learn protecting frontend pages
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && ( // if person is not logged in, then only we need this login in navbar
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onSubmit={logoutHandler}>Logout</button>{" "}
              {/*For logout we dont really need to send any request bcs firebase dont store or care whether person is logged in or not, we just have to change the state, We just have to make sure that in pur context api , we clear our token, We set it back to an empty string or to null*/}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
