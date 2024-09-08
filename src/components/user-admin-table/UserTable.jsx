import '../../styles/table.css'
import UserRow from '../user-admin-row/UserRow'

export default function UserTable({ users, deleteUser, handleEditUser }) {
    return (
        <table className="product-admin-table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Fecha de nacimiento</th>
                    <th>Contraseña</th>
                    <th>País</th>
                    <th>Observaciones</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(userData => {
                        return <UserRow     key={userData.id} 
                                            user={userData} 
                                            deleteUser={deleteUser}
                                            handleEditUser={handleEditUser}/>
                    })
                }
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}