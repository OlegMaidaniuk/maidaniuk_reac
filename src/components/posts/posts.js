import React, {useState} from 'react';
import {useEffect} from "react";
import Post from "./post/post";

const Posts = () => {
    const [posts,setposts] =
    useState([]);

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(value => value.json()).then(value => setposts(value))


    },[])
    return (
        <div>
            {posts.map(post=><Post key={post.id}post={post}/>)}
        </div>
    );
};

export default Posts;