import { Link, useNavigate, } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    
    const Navigate = useNavigate();
    
    const postStyle ={
        border : '2px solid pink',
        padding  : '5px',
        borderRadius : '20px'
    }
    const handleShowDetails = () =>{
        Navigate(`/post/${id}`)
    }
    return (
        <div  style={postStyle}>
            <h3>Post of id : {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;