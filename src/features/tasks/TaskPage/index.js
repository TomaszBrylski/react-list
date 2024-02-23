import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <>
      <Header title="Task details" />
      <Section
        title={task ? task.content : "Task is not found"}
        body={
          <>
            <strong>Done:</strong> {task.done ? "Yes" : "No"}
          </>
        }
      />
    </>
  );
}

export default TaskPage;
