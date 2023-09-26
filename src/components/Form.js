import { useState } from "react";
import List from "./List";


const Form = () =>{
    const [inputText, setInputText] = useState("");
    const [dataList, setDataList] = useState([]);

    const sendData = ()=>{
        let dataArray = [...dataList];
        dataArray.push(inputText);
        
        setDataList(dataArray);

        setInputText("");
    }

    // console.log(dataList);

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    return (
        <div>
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={(e)=>{
                setInputText(e.target.value);
            }}></input>

            <button onClick={sendData}>Add</button>
        </form> 

        <List data={dataList} />
        </div>
        
    )
}
export default Form;