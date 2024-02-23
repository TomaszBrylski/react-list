import Tasks from "./features/tasks/TasksPage";
import Task from "./features/tasks/TaskPage";
import Author from "./features/author/Author";
import Container from "./common/Container/styled.js";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Switch>
          <Route path={toTask()}>
            <Task />
          </Route>
          <Route path={toTasks()}>
            <Tasks />
          </Route>
          <Route path={toAuthor()}>
            <Author />
          </Route>
          <Route path="/">
            <Redirect to={toTasks()} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;
