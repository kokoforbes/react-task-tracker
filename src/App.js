import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Cleand the house",
      day: "July 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Go to the gym",
      day: "July 10th at 8:30am",
      reminder: true
    },
    {
      id: 3,
      text: "Read a book",
      day: "July 11th at 5:30pm",
      reminder: true
    }
  ])

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // TOGGLE REMINDER
  const toggleReminder = (id ) => {
    console.log(id)
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks}  onDelete={deleteTask} onToggle={toggleReminder} />):("No Tasks To Show")}
    </div>
  );
}

export default App;
