import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { selectTasksByQuery, toggelTaskDone, removeTask, selectHideDone, } from "../../tasksSlice";
import { toTask } from "../../../../routes";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter} from "../queryParameters";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
      <List>
        {tasks.map((task) => (
          <Item 
            key={task.id} 
            hidden={task.done && hideDone}
          >
            <Button 
              toggleDone 
              onClick={() => dispatch(toggelTaskDone(task.id))}
            >
              {task.done ? "✓" : ""}
            </Button>
            <Content done={task.done}>
              <StyledLink to={toTask({ id: task.id })}>
                {tasks.content}
              </StyledLink>
            </Content>
            <Button 
            remove 
            onClick={() => dispatch(removeTask(task.id))}
            >
              🗑
            </Button>
          </Item>
        ))}
      </List>
    ) 
};

export default TaskList;
