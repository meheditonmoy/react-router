import { Link } from "react-router-dom";

const Use = ({user}) => {
    const {id, name, email, phone} = user;

    const useStyle ={
        border :'2px solid purple',
        padding : '10px',
        borderRadius :'20px'
    }
    return (
        <div style={useStyle}>
            <h2>{name}</h2>
            <p>Email :{email}</p>
            <p>Phone :{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default Use;