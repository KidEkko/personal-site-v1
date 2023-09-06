import { useState} from "react";
import { Link } from "react-router-dom";

// should be passing login availability from App
function NavBar() {
  const [user, setUser] = useState(null);

  function handleLogin(loggedUser) {
    setUser(loggedUser);
  };

  function handleLogout() {
    setUser(null);
  };

    return (
      <>
        <nav>
          <div className="nav-top_bar">
            <div className="linkWrap nav-item">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/me">Me</Link>
              </div>
              {/*
              <div>
                <Link to="/projects">My Projects</Link>
              </div>
              <div>
                <Link to="/tests">Tests</Link>
              </div>
              */}
            </div>
            <div className="filler nav-item"></div>
            <div className="filler nav-item"></div>
            <div className="logWrap nav-item">
              {user ? (
                <div className="logout">
                  <div>Signed in as {user.name}</div>
                  <LogoutButton handleLogout={handleLogout} />
                </div>
              ) : (
                <LoginButton handleLogin={handleLogin} />
              )}
            </div>
          </div>
        </nav>
      </>
    );
};

// will shift the buttons out eventually
function LoginButton({handleLogin}) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState({name: "", password: ""}); 
  //user object can probably be defined in another file along with other functionality
  //user probably can be done with context api?

  function toggleLogin() {
    setLoggingIn(!loggingIn);
  }

  function setUsername(name) {
    setUser({ ...user, name: name });
  }
  function setPassword(pass) {
    setUser({ ...user, password: pass });
  }

  function doLogin(e) {
    e.preventDefault();
    
    //do login stuff

    if (user.name && user.password) {
      //but verify
      handleLogin(user);
      toggleLogin();
      // in future only toggle if log in is successful
    } else if (!user.name) {

    } else if (!user.password) {

    }
  }

  async function testAPI(e) {
    e.preventDefault();

    // set some loading variable to be true
    // while loading, button should change in some way (or a component itself, button should be disabled from triggering multiple calls)
    
      try {
        const url = "https://kidekko.dev/api/hello";
        const msg = fetch(url, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "https://kidekko.dev",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST",
          },
        }).then((resp) => {
          if (!resp.ok) {
            throw new Error("Network response was not ok");
          }
          return resp.json();
        });
        console.log(msg);

      } catch {
        console.log("whoops");
      }
  }

  return (
    <div>
      <button className="logButton" onClick={toggleLogin}>
        Log In
        <span className={`arrow-icon ${loggingIn ? "down" : ""}`}>
          &#x25BC;
        </span>
      </button>
      <div className={`login-menu ${loggingIn ? "open" : ""}`}>
        <h3>Username</h3>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>Password</h3>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="logButton" onClick={doLogin}>
          Login
        </button>
        <button className="logButton" onClick={testAPI}>
          Test
        </button>
        <p>This menu was made for testing, and will only display your name</p>
        <p>Password just needs to be filled out</p>
      </div>
    </div>
  );
};

function LogoutButton({handleLogout}) {

  function doLogout() {
    handleLogout();
  }

  return (
    <div>
      <button type="button" className="logButton" onClick={doLogout}>
        Log Out
      </button>
    </div>
  );
};

export default NavBar;