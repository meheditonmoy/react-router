import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";
import './Users.css'


const User = () => {
    const users =useLoaderData();

    console.log(users)
    return (
        <div>
            <h2>Our User:{users.length}</h2>
            <p>This is our locky user...</p>
            <div className="users">
                {
                    users.map(user => <Use key={user.id} user={user}></Use>)
                }
            </div>
        </div>
    );
};

export default User;