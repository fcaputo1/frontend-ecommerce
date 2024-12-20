import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatDate";

const URL = import.meta.env.VITE_SERVER

export default function UserRow({ user, deleteUser, handleEditUser }) {

    return (
        <tr>
            <td className="table-image">
                <img
                    src={`${URL}/images/users/${user.avatar}`}
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
                {formatDate(user?.birthday)}
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
                <button className="delete-button" onClick={ () => deleteUser(user._id) }>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}
