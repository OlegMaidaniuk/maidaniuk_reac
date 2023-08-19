const UserDetails = ({data}) => {
    const {id, name, userName, email} = data;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>userName:{userName}</div>
            <div>email:{email}</div>
        </div>
    );
};

export {UserDetails};