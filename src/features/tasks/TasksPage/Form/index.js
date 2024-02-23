import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Button, StyledForm } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

    const onFormSubmit = (event) => {
      event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="What is there to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Add task</Button>
    </StyledForm>
  );
};

export default Form;
