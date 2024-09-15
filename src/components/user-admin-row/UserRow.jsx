import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserRow({ user, deleteUser, handleEditUser }) {

    return (
        <tr>
            <td className="table-image">
                <img
                    src={user?.avatar}
                    alt={user?.name}
                />
            </td>
            <td className="table-name">
                {user?.name}
            </td>
            <td className="table-date">
                {user?.email}
            </td>
            <td className="table-date">
                {new Date(user?.birthday).toLocaleDateString('es-ES')}
            </td>
            <td className="table-date">
                {user?.password}
            </td>
            <td className="table-date">
                {user?.country}
            </td>
            <td className="table-description">
                <div className="description-container">
                    {user?.observations}
                </div>
            </td>
            <td className="table-actions">
                <button className="edit-button" onClick={ () => handleEditUser(user) }>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className="delete-button" onClick={ () => deleteUser(user.id) }>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}
