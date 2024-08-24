import { useEffect, useState } from 'react'
import axios from 'axios';
import '@fontsource/roboto/400.css';


function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data)
      })
  }, [])


  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
