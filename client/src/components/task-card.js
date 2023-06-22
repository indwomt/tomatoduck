import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";
// import { useEffect, useState } from "react";

export default function TaskCard({ todoLocal, user, deleteTask }) {

  return (
    <div className="container col-10">
      {user ? (
        user.map((tasks) => (
          <Card key={tasks._id} className="task-box col-12 mt-2">
            <div className="d-flex justify-content-between">
              <div className="col my-3 px-3 align-items-center">
                <p className="align-items-center task-text">{tasks.todo}</p>
              </div>
              <div className="col-auto p-2 align-items-center">
                <Button
                  className="delete-btn"
                  onClick={() => deleteTask(tasks._id)}
                >
                  <Trash />
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : todoLocal ? (
        todoLocal.map((task) => (
          <Card key={task} className="task-box col-12 mt-2">
            <div className="d-flex justify-content-between">
              <div className="col my-3 px-3 align-items-center">
                <p className="align-items-center task-text">{task}</p>
              </div>
              <div className="col-auto p-2 align-items-center">
                <Button className="delete-btn" onClick={() => deleteTask(task)}>
                  <Trash />
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <Card>No Tasks Saved Yet...</Card>
      )}
    </div>
  );
}
