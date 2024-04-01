import { useState, useEffect } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'
import useCrud from './hook/useCrud'
import DeleteCard from './components/DeleteCard'
// const url = 'https://users-crud.academlo.tech'
const url = 'https://backend-users-crud.onrender.com/api/v1'

function App() {

  
  const [isOpen, setIsOpen] = useState(false)
  const [editUser, setEditUser] = useState();

  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);
  // const [count, setCount] = useState(0)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className='container-total'>
      <h1 className='container-total-title'> Usuarios</h1>
      <div className='container-total-button'>
        <button className='container-total-button' onClick={handleOpen}>{<box-icon name='user-plus' ></box-icon>}</button>
      </div>
      <FormUser
        createUser={createUser}
        editUser={editUser}
        updateUser={updateUser}
        setEditUser={setEditUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='container-card'>
        {
          users?.map(user => (
            <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}
            />
            ))
          }
      </div>
          
    </div>
  )
}

export default App
