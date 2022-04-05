import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const ListCom = (props) => {

    const [line,setline] = useState(false);

    const cutIt = () =>{
        setline(true);
    }
    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt}>
                <DeleteIcon className="deleteIcon" />
                </span>
                <li style={{textDecoration : line ? "line-through":"none"}}>
                {props.text}
                </li>
            </div>
        </>
    )
}

export default ListCom;