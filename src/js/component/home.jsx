import React from "react";
import TodoListApp from "./TodoListApp.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home =({ listOfTasks, onDelete }) => {
	return (
		<>
		<div className="text-center">
            <TodoListApp/>
		{/* {listOfTasks.length === 0 ? (
                <p>No pending tasks</p>
            ) : (
                listOfTasks.map((task, i) => (
                    <div className="app-li mx-auto" key={i}>
                        {task.text}
                        <button id={task.id} className="app-li-delete" onClick={() => onDelete(task.id)}>
                            &#10006;
                        </button>
                    </div>
                ))
            )} */}
		</div>
		</>
	);
};

export default Home;
