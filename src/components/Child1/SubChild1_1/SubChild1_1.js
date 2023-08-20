import {useContext, useEffect} from "react";
import {Context} from "../../../App";

const SubChild11 = () => {
    // useEffect(()=>{})
    const {data} = useContext(Context);
    return (
        <div>
            {data.map(item=><div key={item}>{item}</div>)}
        </div>
    );
};

export {SubChild11};