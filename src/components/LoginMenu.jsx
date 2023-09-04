import { useState } from "react";

// currently unused
function LoginMenu() {
  const [loggingIn, setLoggingIn] = useState(false);
    return (
      <div className={`login-menu ${loggingIn ? "open" : ""}`}>
        <input
          type="text"
          placeholder="Username"
          value={user.name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={doLogin}>Login</button>
      </div>
    );
}

export default LoginMenu