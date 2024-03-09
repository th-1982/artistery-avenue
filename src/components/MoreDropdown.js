import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";


// Dropdown menu for Posts & Comments
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fa-solid fa-ellipsis-vertical fa-lg"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

// Dropdown menu for Posts & Comments
export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown className="ml-auto">
            <Dropdown.Toggle as={ThreeDots} />
            <Dropdown.Menu
                className="text-center"
                popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit"
                >
                    <i className="fa-solid fa-pencil" /> {/* Edits the Post & Comment */}
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label="delete"
                >
                    <i className="fa-solid fa-trash"  /> {/* Deletes the Post & Comment */}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

  

// Dropdown menu for the User Profile
export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
        <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
            <Dropdown.Toggle as={ThreeDots} />
            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit`)}
                    aria-label="edit-profile"
                >
                    <i className="fas fa-edit"  />{" "}
                    {/* Edits the Profile image & Description */}
          Edit Profile
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/username`)}
                    aria-label="edit-username"
                >
                    <i className="far fa-id-card"  /> {/* Edits the Username */}
          Change Username
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/password`)}
                    aria-label="edit-password"
                >
                    <i className="fas fa-key"  /> {/* Updates the User Password */}
          Update Password
                </Dropdown.Item>

                {/*NOTE TO SELF: Bugged Component to Delete a User Profile*/}
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/delete`)}
                    aria-label="delete-profile"
                >
                    <i className="fa-solid fa-user-xmark"  />{" "}
                    {/* Deletes the User account (!) - Bugged - Del. Cookies + CTRL+R the page in order to successfully eliminate the User acc. (Will be dealth with when time allows)*/}
                    <s>Delete Account</s>
                    <i className="fa-solid fa-mosquito-net fa-shake fa-sm" ></i>
                </Dropdown.Item>

                <Dropdown.Item
                    // sends user to the create artist form
                    onClick={() => history.push("/artists/create")}
                    aria-label="add-artist"
                >
                    <i className="fas fa-plus-square" />
          register as artist
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}



