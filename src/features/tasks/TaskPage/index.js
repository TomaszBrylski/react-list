import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector((state) => getTaskById(state, id));

  return (
      <Container>
        <Header title="Task details" />
        <Section
          title={task ? task.content : "Task is not found"}
          body={!!task && (
              <>
                <strong>Done:</strong>: {task.done ? "Yes" : "No"}
              </>
            )}
        />
      </Container>
    );
  }

export default TaskPage;
