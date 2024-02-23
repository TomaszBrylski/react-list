import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { FetchExampleTasksButton } from "./FetchExampleTasksButton";

function TasksPage() {
  return (
    <>
      <Header title="Task List" />
      <Section 
        title="Add a new task" 
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton/>}/>
       
      <Section 
        title="Search in" 
        body={<Search />} />

      <Section
        title="Tasks List"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
}

export default TasksPage;
