import { Route, Switch,Link } from "react-router-dom";
import { CompletedTodos } from "../components/CompletedTodos";
import { TodosDisplay } from "../components/TodosDisplay";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TodosItem } from "../components/TodoItem";

export function Routes() {
    return <>
         <AppBar position="static">
        <Tabs aria-label="simple tabs example">
         <Link to="/"> <Tab label="HOME"  /></Link>
          <Link to="/complete"><Tab label="COMPLETED TODOS" /></Link>
        </Tabs>
      </AppBar>
        
        <Switch>
            <Route exact path="/"><TodosDisplay/></Route>
            <Route exact path="/complete"><CompletedTodos/></Route>
            <Route exact path="/:id"><TodosItem/></Route>
        </Switch>
    </>
}