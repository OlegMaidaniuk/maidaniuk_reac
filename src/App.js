import {Users} from "./componets/Users/Users";
import {useState} from "react";
import {UserPosts} from "./componets/Users/Posts/Posts";

const App = () => {
    const [userId, setUserId] = useState(null);


    return (
        <div>
            <Users setUserId={setUserId}/>
            {userId && <UserPosts userId={userId}/>}
        </div>
    );
};

export {App};