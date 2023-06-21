import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function TaskNoSignup({close}) {

  const todos = JSON.parse(localStorage.getItem(`todos`)) || [];
  const [todo, setTodo] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    setTodo(``);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Your To-do Task"
          name="todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </Form.Group>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button disabled={!todo} variant="primary" type="submit">
          Save Changes
        </Button>
      </Modal.Footer>
    </Form>
  );
}
