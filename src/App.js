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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
