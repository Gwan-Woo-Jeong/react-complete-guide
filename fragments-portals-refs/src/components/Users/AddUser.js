import React, { Fragment, useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const currentName = nameInput.current.value;
    const currentAge = ageInput.current.value;
    event.preventDefault();
    if (currentName.length === 0 || currentAge.length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+currentAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(currentName, currentAge);
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInput} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;