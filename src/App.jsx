import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MessagesBoxScreen from './screens/MessagesBoxScreen'
import { ToastContainer } from 'react-toastify'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SingleMessage from './screens/SingleMessage'
import SigninScreen from './screens/SignInScreen'
import SignupScreen from './screens/SignUpScreen'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="top-center" limit={1} />
        <Routes>
          <Route path="/messages/:id" element={<SingleMessage />} />
          <Route path="/messages" element={<MessagesBoxScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


