import {useState} from "react";
import PostDetal from "../post detelias/post detal";

const post = ({post}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShow, setisShow] = useState(false);
    const {id, title} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => setisShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>
            {
                isShow&& <PostDetal post={post}/>
                }
                </div>
                );
            };

            export default (post);