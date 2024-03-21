import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetailes = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const {postId} = useParams();
    const Navigate = useNavigate();

    console.log(postId)

    const handleGoBack = ()=> {
        Navigate(-1)
    }
    return (
        <div>
            <h2>Post Details about : {id}</h2>
            <p>Title : {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetailes;