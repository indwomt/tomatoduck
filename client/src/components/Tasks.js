import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import TaskCard from "./Task-card";
// import TaskNoSignup from "./Task-no-signup";
import Auth from "../utils/auth";
import { saveTodo, getMe } from "../utils/API";
import { deleteTodo } from "../utils/API";

export default function Tasks() {
  const [show, setShow] = useState(false);
  const [todos, setTodo] = useState({ todo: `` });

  // this is the empty array to pull the object data to populate the tasks
  const [userData, setUserData] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTask = async (id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      const todoArray = JSON.parse(localStorage.getItem(`todos`));
      const newArray = todoArray.filter((todoArray) => todoArray !== id);
      localStorage.setItem(`todos`, JSON.stringify(newArray));
      setTask(newArray)
    } else {
      try {
        const del = await deleteTodo(id, token);
        if (!del.ok) {
          throw new Error(`task not deleting`);
        }
        const updatedUser = await del.json();
        setTodo(updatedUser);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTodo({ todos, [name]: value });
  };

  const todosLocalStorage = JSON.parse(localStorage.getItem(`todos`)) || [];
  const [task, setTask] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      todosLocalStorage.push(task);
      localStorage.setItem("todos", JSON.stringify(todosLocalStorage));
      setTask(``);
    } else {
      try {
        const response = await saveTodo(todos, token);
        if (!response.ok) {
          throw new Error(`there's trouble`);
        }
        setTodo({ todo: `` });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const userArray = userData.todos;

  const [todosLocal, setTodosLocal] = useState([]);

  // const todoArray = JSON.parse(localStorage.getItem(`todos`));
  useEffect(() => {
    const getLocalStorage = () => {
      const todosUpdate = JSON.parse(localStorage.getItem(`todos`));
      setTodosLocal(todosUpdate);
    };
    getLocalStorage();
  }, [task]);

  //use effect grabs user object from db in order to acces todo array fro our saved tasks
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }
        Auth.isTokenExpired(token);
        const response = await getMe(token);
        if (!response.ok) {
          throw new Error(`error in the mirror`);
        }
        const user = await response.json();
        setUserData(user);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [todos]);

  return (
    <div className=" task-section col-12 d-flex-col my-5">
      <div className="task-header col-12 justify-content-between d-flex flex-wrap">
        {/* add something like todo[i].length to get the tasks needed */}
        <h2 className="col-md-4 flex-wrap">
          Tasks Left: {!userArray ? `0` : userArray.length}
        </h2>
        <button
          className="add-task-btn col-md-4 flex-wrap"
          onClick={handleShow}
        >
          Add Task
        </button>
      </div>
      <div className="task-container">
        <TaskCard
          user={userArray}
          deleteTask={deleteTask}
          todoLocal={todosLocal}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        {Auth.loggedIn() ? (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Your To-do Task"
                name="todo"
                onChange={handleInput}
                value={todos.todo}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button disabled={!todos.todo} variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Your To-do Task"
                name="todo"
                onChange={(e) => setTask(e.target.value)}
                value={task}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button disabled={!task} variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Modal>
    </div>
  );
}
