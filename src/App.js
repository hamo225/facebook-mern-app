import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
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
