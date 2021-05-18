import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import Login from "./Components/Login";

function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (
        <Login></Login>
      ) : (
        <div>
          <Header></Header>
          <div className="app__body">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Widgets></Widgets>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
