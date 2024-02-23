import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import {
  selectTasksByQuery,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName.js";
import { useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content $done={task.done}>
          <StyledLink to={`/tasks/${task.id}`}>
              {task.content}
            </StyledLink>
          </Content>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
            </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
