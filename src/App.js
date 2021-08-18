import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
// import logo from "./logo.svg";
import LibraryComponent from "./components/LibraryComponent";

function DashboardComponent() {
  return <div></div>;
}

function ActivityComponent() {
  return <div></div>;
}

/* function LibraryComponent() {
  return <div></div>;
} */

function SettingsComponent() {
  return <div></div>;
}

function App() {
  return (
    <div className="App">
      <div className="side_bar">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
          <div className="text_logo">
            <div className="text_logo_money">MONEY</div>
            <span>tracker</span>
          </div>
        </div>
        <div className="side_bar_inner">
          <div className="side_bar_inner_top">
            <NavLink exact to="/">
              <div className="frame">&#128471; Dashboard</div>
            </NavLink>
            <NavLink exact to="/activity">
              <div className="frame">&#128498; Activity</div>
            </NavLink>
            <NavLink exact to="/library">
              <div className="frame">&#128366; Library</div>
            </NavLink>
          </div>
          <NavLink exact to="/settings">
            <div className="frame">&#9881; Settings</div>
          </NavLink>
        </div>
      </div>
      <main className="main">
        <Switch>
          <Route exact path="/" component={DashboardComponent}></Route>
          <Route path="/activity" component={ActivityComponent}></Route>
          <Route path="/library" component={LibraryComponent}></Route>
          <Route path="/settings" component={SettingsComponent}></Route>
        </Switch>
        <aside></aside>
      </main>
    </div>
  );
}

export default App;
