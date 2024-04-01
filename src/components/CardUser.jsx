import React from 'react'
import './estilos/CardUser.css'

const CardUser = ({ user, deleteUser, setEditUser, setIsOpen }) => {

    console.log(user)

    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);
    }

    return (
        <div className='container-container'>
            <article className='container'>
                <h3 className='container-title'>{user.first_name} {user.last_name}</h3>
                <ul className='container-item'>
                    <li className='container-list'><span>Correo: </span><span>{user.email}</span></li>
                    <li className='container-list'><span>Cumpleaños: </span><span><ion-icon name="calendar-outline"></ion-icon> {user.birthday}</span></li>
                </ul>
                <div className={'button-container'}>
                    <div className='container-button'>
                        <span>
                            <button className='container-button' onClick={handleDelete}><box-icon name='trash-alt' ></box-icon></button>
                        </span>
                    </div>
                    <div className='container-button'>
                        <span>
                            <button className='container-button' onClick={handleEdit}><box-icon name='edit'></box-icon>
                            </button>
                        </span>
                    </div>
                </div>


            </article>
        </div>
    )
}

export default CardUser;