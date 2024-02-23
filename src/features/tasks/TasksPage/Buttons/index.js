import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import Button from "../Button";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())} hidden={isEveryTaskDone}>
            {hideDone ? "Show" : "Hide"} tasks done
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
            hidden={isEveryTaskDone}
          >
            Mark all tasks as done
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
