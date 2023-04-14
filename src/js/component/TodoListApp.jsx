//import React from "react";
import React, { useEffect, useState } from "react";

function TodoListApp() {
  // const newUser = {
  //   // name:"Vasily",
  //   // job:"Teacher"
  // };
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [erase, setErase] = useState();
  const [newUser, setnewUser] = useState();

  ///////////////////////Miguel////////////////////////////

  const [user, setUser] = useState("");
  const [createUserSucces, setCreateUserSucces] = useState(false);
  const [deleteUserSucces, setDeleteUserSucces] = useState(false);
  const [sentUser, setSentUser] = useState(false);
  const [sentDelete, setSentDelete] = useState(false);
  /////////////////////////////////////////////////////////

  //GET---

  useEffect(() => {
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/teamgeekuser`)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  console.log(tasks);

  //POST-----------------------------------
  // const addTask = (e) => {
  //   e.preventDefault();
  //   const inputTask = document.getElementById("task-input");

  //   fetch("https://assets.breatheco.de/apis/fake/todos/user/teamgeekuser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "applocation/json",
  //     },
  //     body: JSON.stringify({
  //       task: inputTask.value,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const newTasks = [...tasks, data];
  //       setTasks(newTasks);
  //       inputTask.value = "";
  //     });
  // };

  //DELETE----------------------------------

  // const deleteTask=(id)=>{
  //     fetch('task${id}',{
  //         method:'DELETE'
  //     })
  //     .then(response=>response.json())
  //     .then(data=>{
  //         const newTasks=tasks.filter(task=>
  //             task.id!==id);
  //             setTasks(newTasks);
  //     },[erase]);

  // };

  // useEffect(() => {
  //     fetch("http://assets.breatheco.de/apis/fake/todos/user/teamgeekuser")
  //         .then(res => res.json())
  //         .then(res => setItems(res))
  // }, []);

  //POST

  //     useEffect(() => {
  //     fetch ("https://assets.breatheco.de/apis/fake/todos/user/teamgeekuser",
  // {
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newUser)
  // })
  //     .then(res=>{
  //         if(!res.ok){
  //             console.log("Error");
  //         }

  //         return res.json()

  //     })
  //     .then(data=>{
  //         console.log("SUCCESS");
  //     })
  //     . (error =>{
  //         console.log("Error");
  //     })

  // }, [newUser]);

  //PUT---

  // useEffect(() => {
  //   if (!items.length) return;
  //   fetch("https://assets.breatheco.de/apis/fake/todos/user/teamgeekuser", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(items),
  //   })
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       console.log("SUCCESS");
  //     })

  //     .catch((err) => {
  //       console.log("Error");
  //     });
  // }, [items]);

  //DELETE-----------------------------------------------------------------------

  // useEffect(() => {
  //   if (erase) {
  //     let newArray = items.filter((element) => element.id != erase);
  //     setItems(newArray);
  //   }
  // });

  //POST ADD NEWUSER-----------------------------------------------------------------

  // const handleOpenUser = () => {
  //   fetch("https://assets.breatheco.de/apis/fake/todos/user/${newUser}")
  //     .then((res) => {
  //       if (!res.ok) {
  //         return fetch(
  //           "https://assets.breatheco.de/apis/fake/todos/user/${newUser}",
  //           {
  //             method: "POST",
  //             body: JSON.stringify(newUser),
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }[setnewUser]
  //         );
  //       }
  //       return res;
  //     })
  //     .then((res) => res.json())
  //     .then((data) => setItems(data))
  //     .catch((error) => {
  //       console.log("error");
  //     });
  // };

  // const updateText = (e) => {
  //   setInputText(e.target.value);
  // };
  // const handleNewTask = (e) => {
  //   e.preventDefault();
  //   if (inputText.trim() == " ") return;
  //   const newItem = {
  //     text: `${inputText}`,
  //     // label: "Add a Task",
  //     done: false,
  //     id: (Math.random() * 20).toFixed(1),
  //   };
  //   setItems([...items, newItem]);
  //   setInputText(" ");
  //   console.log(items);
  // };

  const createUser = async (newUser) => {
    setSentUser(true);
    let userResponse = await fetch(
      `http://assets.breatheco.de/apis/fake/todos/user/${newUser}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([]),
      }
    );

    if (userResponse.ok) {
      setCreateUserSucces(true);
    } else {
      setCreateUserSucces(false);
    }
  };

  const deleteUser = async (newUser) => {
    setSentDelete(true);

    let deleteResponse = await fetch(
      `http://assets.breatheco.de/apis/fake/todos/user/${newUser}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (deleteResponse.ok) {
      setDeleteUserSucces(true);
    } else {
      setDeleteUserSucces(false);
    }
  };

  return (
    <div>
      <nav>
        <button className="home-button btn btn-secondary">Some button</button>
      </nav>
      <main>
        <h1>To Do List</h1>

        {tasks.length === 0 ? (
          <p>No pending tasks</p>
        ) : (
          tasks.map((task, i) => (
            <div className="app-li mx-auto" key={i}>
              {task.label}
              <button
                id={task.id}
                className="app-li-delete"
                // onClick={() => onDelete(task.id)}
              >
                &#10006;
              </button>
            </div>
          ))
        )}
        {/* <form onSubmit={addTask}>
          <input
            className="app-input"
            onChange={updateText}
            value={inputText}
            type="text"
            id="task-input"
            placeholder="No tasks, Add a task!"
          />
          <button
            className="app-submit"
            onClick={handleNewTask}
            //title="Add task"
          >
            <i className="fas fa-plus" />
          </button>
        </form> */}
        {/* <Home listOfTasks={tasks} /> */}
        {/* <input className="app-input" placeholder="New User..." />
        <button className="btn btn-danger" onClick={handleOpenUser}>
          Load User
        </button> */}

        <input
          className="app-input"
          placeholder="New User..."
          onChange={(e) => setUser(e.target.value)}
        />
        <div>{"user:" + user}</div>

        <button
          className="btn btn-danger"
          onClick={(e) => {
            createUser(user);
          }}
        >
          Create User
        </button>

        {sentUser && (
          <div>
            {createUserSucces ? (
              <div className="alert alert-success" role="alert">
                User created successfully!
              </div>
            ) : (
              <div className="alert alert-danger" role="alert">
                User not created!
              </div>
            )}
          </div>
        )}

        <br />

        <button
          className="btn btn-danger mt-1"
          onClick={(e) => {
            deleteUser(user);
          }}
        >
          Delete User
        </button>

        {sentDelete && (
          <div>
            {deleteUserSucces ? (
              <div className="alert alert-success" role="alert">
                User deleted successfully!
              </div>
            ) : (
              <div className="alert alert-danger" role="alert">
                User not deleted!
              </div>
            )}
          </div>
        )}
      </main>
      <footer>
        <p>Made with ❤️ by 4Geeks Team</p>
      </footer>
    </div>
  );
}

export default TodoListApp;
