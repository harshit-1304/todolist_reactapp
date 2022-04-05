import React, { useState } from "react";
import "./index.css";
import ListCom from "./ListCom";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const ToDoList = () => {


    const [item, setitem] = useState("");
    const [newitem, setnewitem] = useState([]);

    const itemChange = (event) => {
        setitem(event.target.value);
    }

    const clicked = () => {
        setnewitem((prevVal)=>[...prevVal,item]);
        setitem("");
    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add your Task"
                        onChange={itemChange}
                        value = {item}
                    />
                    <AddCircleOutlinedIcon className="newBtn" onClick={clicked} />
                    <br />
                    <ol>
                        {newitem.map((val,index) => {
                            return <ListCom key={index} text={val} />;
                        })
                        }
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
}

export default ToDoList;