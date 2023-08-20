const Post = (post) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>userId:{userId}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};