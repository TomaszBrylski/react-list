import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import Button from "../Button";

export const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <>
    <Button 
  loading={loading ? "true" : undefined} 
  onClick={() => dispatch(fetchExampleTasks())}
>
  {loading === true ? "Loading..." : "Get example tasks"}
</Button>
    </>
  );
};