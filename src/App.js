import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTasks from './Components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc Appointment',
      day: '12th March, 2:30pm',
      remainder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: '12th March, 2:30pm',
      remainder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: '12th March, 2:30pm',
      remainder: false,
    }
  ])

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ?
    {... task, remainder:!task.remainder
    } : task))
  }
  
  return (
    <div className="container">
      <Header />
      < AddTasks />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} />) : (
        'No Tasks Available'
      )}
    </div>
  );
}



export default App;
