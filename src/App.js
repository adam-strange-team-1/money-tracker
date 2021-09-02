import { Switch, Route, useRouteMatch } from "react-router-dom";
import logo from "./img/logo-icon.svg";
import {
  SideBar,
  Logo,
  LogoPhone,
  LogoText,
  LogoTextPhone,
  LogoTextTop,
  LogoTextBottom,
  LogoLineBottom,
  SideBarInner,
  SideBarInnerTop,
  SideBarBottom,
  Nav,
  NavText,
  Icon,
} from "./components/SidebarStylesComponents";
import { Wrapper } from "./components/common/StyledComponents";
import Settings from "./components/settings_components/SettingsComponent";
import Widget from "./components/Widgets/Widget";
import Dashboard from "./components/dachboard_components/Dashboard";
import LibraryComponent from "./components/library-components/LibraryComponent";
import Activity from "./components/components_activity/Activity";


function DashboardComponent() {
  return <Dashboard />;
}

function ActivityComponent() {
  return <Activity/>;
}

function Library() {
  return <LibraryComponent/>;
}

function SettingsComponent() {
  return <Settings />;
}

export default function App() {
  const match = useRouteMatch();
  return (
    <Wrapper>
      <LogoPhone>
        <img src={logo} alt="" />
        <LogoTextPhone>
          <LogoTextTop>MONEY</LogoTextTop>
          <LogoTextBottom>tracker</LogoTextBottom>
        </LogoTextPhone>
      </LogoPhone>
      <SideBar>
        <Logo>
          <img src={logo} alt="" />
          <LogoText>
            <LogoTextTop>MONEY</LogoTextTop>
            <LogoTextBottom>tracker</LogoTextBottom>
          </LogoText>
        </Logo>
        <LogoLineBottom />
        <SideBarInner>
          <SideBarInnerTop>
            <Nav exact to={`${match.url}`} style={{ textDecoration: "none" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Icon d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" />
              </svg>
              <NavText>Dashboard</NavText>
            </Nav>
            <Nav
              to={`${match.url}activity`}
              style={{ textDecoration: "none" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Icon d="M3.5 18.49L9.5 12.48L13.5 16.48L22 6.92001L20.59 5.51001L13.5 13.48L9.5 9.48001L2 16.99L3.5 18.49Z" />
              </svg>
              <NavText>Activity</NavText>
            </Nav>
            <Nav to={`${match.url}library`} style={{ textDecoration: "none" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Icon d="M12 9C14.21 9 16 7.21 16 5C16 2.79 14.21 1 12 1C9.79 1 8 2.79 8 5C8 7.21 9.79 9 12 9ZM12 3C13.1 3 14 3.9 14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5C10 3.9 10.9 3 12 3ZM12 11.55C9.64 9.35 6.48 8 3 8V19C6.48 19 9.64 20.35 12 22.55C14.36 20.36 17.52 19 21 19V8C17.52 8 14.36 9.35 12 11.55ZM19 17.13C16.47 17.47 14.07 18.43 12 19.95C9.94 18.43 7.53 17.46 5 17.12V10.17C7.1 10.55 9.05 11.52 10.64 13L12 14.28L13.36 13.01C14.95 11.53 16.9 10.56 19 10.18V17.13Z" />
              </svg>
              <NavText>Library</NavText>
            </Nav>
          </SideBarInnerTop>
          <SideBarBottom>
            <Nav
              to={`${match.url}settings`}
              style={{ textDecoration: "none" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Icon d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.57 5.11 19.4 5.02 19.22 5.02C19.16 5.02 19.1 5.03 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75002 2 9.54002 2.18 9.51002 2.42L9.13002 5.07C8.52002 5.32 7.96002 5.66 7.44002 6.05L4.95002 5.05C4.89002 5.03 4.83002 5.02 4.77002 5.02C4.60002 5.02 4.43002 5.11 4.34002 5.27L2.34002 8.73C2.21002 8.95 2.27002 9.22 2.46002 9.37L4.57002 11.02C4.53002 11.34 4.50002 11.67 4.50002 12C4.50002 12.33 4.53002 12.66 4.57002 12.98L2.46002 14.63C2.27002 14.78 2.22002 15.05 2.34002 15.27L4.34002 18.73C4.43002 18.89 4.60002 18.98 4.78002 18.98C4.84002 18.98 4.90002 18.97 4.95002 18.95L7.44002 17.95C7.96002 18.35 8.52002 18.68 9.13002 18.93L9.51002 21.58C9.54002 21.82 9.75002 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.11 18.97 19.17 18.98 19.23 18.98C19.4 18.98 19.57 18.89 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM17.45 11.27C17.49 11.58 17.5 11.79 17.5 12C17.5 12.21 17.48 12.43 17.45 12.73L17.31 13.86L18.2 14.56L19.28 15.4L18.58 16.61L17.31 16.1L16.27 15.68L15.37 16.36C14.94 16.68 14.53 16.92 14.12 17.09L13.06 17.52L12.9 18.65L12.7 20H11.3L11.11 18.65L10.95 17.52L9.89002 17.09C9.46002 16.91 9.06002 16.68 8.66002 16.38L7.75002 15.68L6.69002 16.11L5.42002 16.62L4.72002 15.41L5.80002 14.57L6.69002 13.87L6.55002 12.74C6.52002 12.43 6.50002 12.2 6.50002 12C6.50002 11.8 6.52002 11.57 6.55002 11.27L6.69002 10.14L5.80002 9.44L4.72002 8.6L5.42002 7.39L6.69002 7.9L7.73002 8.32L8.63002 7.64C9.06002 7.32 9.47002 7.08 9.88002 6.91L10.94 6.48L11.1 5.35L11.3 4H12.69L12.88 5.35L13.04 6.48L14.1 6.91C14.53 7.09 14.93 7.32 15.33 7.62L16.24 8.32L17.3 7.89L18.57 7.38L19.27 8.59L18.2 9.44L17.31 10.14L17.45 11.27ZM12 8C9.79002 8 8.00002 9.79 8.00002 12C8.00002 14.21 9.79002 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" />
              </svg>
              <NavText>Settings</NavText>
            </Nav>
          </SideBarBottom>
        </SideBarInner>
      </SideBar>

      <Switch>
        <Route
          exact
          path={`${match.path}`}
          component={DashboardComponent}
        ></Route>
        <Route
          path={`${match.path}activity`}
          component={ActivityComponent}
        ></Route>
        <Route
          path={`${match.path}library`}
          component={Library}
        ></Route>
        <Route
          path={`${match.path}settings`}
          component={SettingsComponent}
        ></Route>
      </Switch>
      <Widget />
    </Wrapper>
  );
}
