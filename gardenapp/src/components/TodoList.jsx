import React, { useState } from 'react';
import '../css/TodoList.css';
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [renderTaskList, setRenderTaskList] = useState([]);

  //Capture the onChange value of the input field
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  // Render the tasks on the UI when 'Add Task Button' is clicked
  const addTask = (e) => {
    const task = {
      id:
        renderTaskList.length === 0
          ? 1
          : renderTaskList[renderTaskList.length - 1].id + 1,
      taskName: inputValue,
    };
    // Clear the input field once task is submitted
    // const clearInputField = document.getElementById('taskInputField');
    e.preventDefault();
    let inputField = document.getElementById('taskInputField');
    inputField.value = '';
    setRenderTaskList([...renderTaskList, task]);
  };

  // Delete button will delete the selected task
  const deleteTask = (id) => {
    setRenderTaskList(renderTaskList.filter((task) => task.id !== id));
  };

  const removeAllTasks = () => {
    setRenderTaskList([]);
  };

  return (
    <div className="app">
      <form onSubmit={addTask}>
        <div className="inputForm">
          {renderTaskList.length > 0 ? (
            <h6 className="tasks-heading">
              Tasks To Do: {renderTaskList.length}{' '}
            </h6>
          ) : (
            <h6 className="tasks-heading">
              No Tasks. Would You Like To Add A Task?
            </h6>
          )}
          <input
            onChange={onChange}
            type="text"
            placeholder="Add a task"
            id="taskInputField"
          />

          <Button onClick={addTask} variant="primary" className="inputBtn">
            Add Task
          </Button>
          <Button
            variant="danger"
            className="inputBtn"
            onClick={removeAllTasks}
          >
            Remove All Tasks
          </Button>
        </div>
      </form>

      {renderTaskList.map((task, id) => {
        return (
          <ListGroup key={id} className="task-container">
            <ListGroup.Item id="task-item" variant="info">
              {task.taskName}
              <ListGroup.Item id="task-buttons">
                <DeleteIcon
                  id="deleteBtn"
                  onClick={() => deleteTask(task.id)}
                />
                <EditIcon id="editBtn" />
              </ListGroup.Item>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
};

export default TodoList;
