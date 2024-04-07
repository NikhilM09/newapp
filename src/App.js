import './App.css';
import './App.scss';
import Header from './components/Header.js';
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext.js';
import { useState, useEffect } from 'react';

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [user2, setUser2] = useState({})

  useEffect(() => {
    //API call//
    const newdata = "Ajinkya"
    // const data = "Nikhil"
    setUser2({
      userName: newdata,
    })

    // setLoggedInUser({
    //   userName: data
    // });
  }, [])


  return (
    <UserContext.Provider value={{
        userName:user2.userName,
        method: setUser2
    }}>
      <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
