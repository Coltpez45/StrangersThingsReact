import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ setToken, setIsLoggedIn, isLoggedIn }) {
  
  function logout() {
    setToken('');
    setIsLoggedIn(false);
    window.localStorage.removeItem("token");
  }
  
  return (
    <nav>
      <h1>Other Stranger's Things!</h1>
      {isLoggedIn ? (
        <>
          <button>
            <Link to="/profile"> Profile</Link>
          </button>

          <button>
            <Link to="/create-post">Create a Post</Link>
          </button>
          
          <button>
            <Link to="/">See all Posts</Link>
          </button>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/register">Create Account?</Link>
          </button>
        </>
      )}
    </nav>
  );
}

export default Nav;

