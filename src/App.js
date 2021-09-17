import Login from './Components/Login'
import './App.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Logout from './Components/Logout'

function App () {
  const user = useSelector(selectUser)

  return <div>{user ? <Logout /> : <Login />}</div>
}

export default App
