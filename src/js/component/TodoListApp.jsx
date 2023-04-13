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
  /////////////////////////////////////////////////////////

  //GET---

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/teamgeekuser")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  //POST-----------------------------------
  const addTask = (e) => {
    e.preventDefault();
    const inputTask = document.getElementById("task-input");

    fetch("https://assets.breatheco.de/apis/fake/todos/user/teamgeekuser", {
      method: "POST",
      headers: {
        "Content-Type": "applocation/json",
      },
      body: JSON.stringify({
        task: inputTask.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const newTasks = [...tasks, data];
        setTasks(newTasks);
        inputTask.value = "";
      });
  };

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

  useEffect(() => {
    if (!items.length) return;
    fetch("https://assets.breatheco.de/apis/fake/todos/user/teamgeekuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log("SUCCESS");
      })

      .catch((err) => {
        console.log("Error");
      });
  }, [items]);

  //DELETE-----------------------------------------------------------------------

  useEffect(() => {
    if (erase) {
      let newArray = items.filter((element) => element.id != erase);
      setItems(newArray);
    }
  });

  //POST ADD NEWUSER-----------------------------------------------------------------

  const handleOpenUser = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/${newUser}")
      .then((res) => {
        if (!res.ok) {
          return fetch(
            "https://assets.breatheco.de/apis/fake/todos/user/${newUser}",
            {
              method: "POST",
              body: JSON.stringify(newUser),
              headers: {
                "Content-Type": "application/json",
              },
            }[setnewUser]
          );
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.log("error");
      });
  };

  const updateText = (e) => {
    setInputText(e.target.value);
  };
  const handleNewTask = (e) => {
    e.preventDefault();
    if (inputText.trim() == " ") return;
    const newItem = {
      text: `${inputText}`,
      // label: "Add a Task",
      done: false,
      id: (Math.random() * 20).toFixed(1),
    };
    setItems([...items, newItem]);
    setInputText(" ");
    console.log(items);
  };

  const createUser = (newUser) => {
    fetch(`http://assets.breatheco.de/apis/fake/todos/user/${newUser}`, {
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log("Success"))
      .catch((error) => {
        console.log("Error");
      });
  };

  const deleteUser = (newUser) => {
    fetch(`http://assets.breatheco.de/apis/fake/todos/user/${newUser}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log("Success"))
      .catch((error) => {
        console.log("Error");
      });
  };

  return (
    <div>
      <nav>
        {/* <button className="home-button btn btn-secondary">Some button</button> */}
      </nav>
      <main>
        <h1>To Do List</h1>
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
        {/* <Home listOfTasks={items} onDelete={setErase} /> */}
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

        <br />

        <button
          className="btn btn-danger mt-1"
          onClick={(e) => {
            deleteUser(user);
          }}
        >
          Delete User
        </button>
      </main>
      <footer>
        <p>Made with ❤️ by 4Geeks Team</p>
      </footer>
    </div>
  );
}

export default TodoListApp;
