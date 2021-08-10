import { Link, Route, Switch } from "react-router-dom";
import { AddTodos } from "../components/AddTodos";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";
import { SideBar } from "../components/SideBar";
import { TodosSummary } from "../components/TodosSummary";
import { TodosTask } from "../components/TodosTask";
import { PrivateRoutes } from "./PrivateRoute";
const Tab = () => {
    return <>
        <Link to="/">Home</Link>
        <br/><Link to="/register">Register</Link>
        <br/><Link to="/login">Login</Link>
    </>
}

export function Routes() {
    return <>
        <Switch>
            <Route exact path="/"><Tab/></Route>
            <Route path="/login"><Tab/><LoginPage/></Route>
            <Route path="/register"><Tab/><RegisterPage/></Route>
            <PrivateRoutes path="/add"><SideBar/><AddTodos/></PrivateRoutes>
            <PrivateRoutes path="/summary"><SideBar/><TodosSummary/></PrivateRoutes>
            <PrivateRoutes path="/task"><SideBar /><TodosTask /></PrivateRoutes>
            <Route>Error 404</Route>
    </Switch>
    </>
}