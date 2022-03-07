import React from 'react'
import TodoList from '../components/Todo/TodoList'
import '../App.css';

function Home() {
  return (
    <div className = 'todo-app'>
    <TodoList></TodoList></div>
  )
}

export default Home


/*
//se le pasaría owner, status, from y to
export default function AppointmentContainer(appointmentFilter) {
    const [appointments, setAppointment] = useState([])
    const getAppointments = async () => {
        axios.get(`http://localhost:3001/appointments/owner/12345671?request=${appointmentFilter.appointmentFilter.request}`)
            .then(res => { setAppointment(res.data) })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAppointments()
    }, [])

    return (
        


        <Grid container xs={12}>
            {
                !appointments.length ? <h1>No hay citas</h1> : appointments.map((appointment) => {
                    return <CardAppointment appointment={appointment}></CardAppointment>
                })
            }
        </Grid>
    )
}*/