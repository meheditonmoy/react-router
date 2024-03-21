import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, website} = user;
    return (
        <div>
            <h2>Details about User : {name}</h2>
            <p>Email :{email}</p>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;