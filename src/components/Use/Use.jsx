
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
        </div>
    );
};

export default Use;