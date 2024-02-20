import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Task List" />
      <Section 
        title="Add a new task" 
        body={<Form />} />
       
      <Section 
        title="Search in" 
        body={<Search />} />

      <Section
        title="Tasks List"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
