import { useState } from "react";

const List = (props) =>{
    const { data } = props;

    const [check, setCheck] = useState('');
    const [inputData, setInputData] = useState([]);


    let checkMark = '\u2714';


    const handleCheck = (index)=>{
        console.log('index', index);
        let checkItem = data.slice(index);
        
        console.log(checkItem);
        if(check === ''){
            setCheck(checkMark)
        }else{
            setCheck('');
        }

        // let updateList = data.splice(index, 1);
        // setInputData(data);
        // console.log(data);
    }
    // console.log(data, 'im dta')

    return (
                
        <ul>
            {
                data.map((item, i) =>{
                    console.log(i.toString());

                    return(
                    <li key={"item" + i.toString()} value={item}>
                        <button onClick={()=> handleCheck(i)}>{check}</button> {item}
                    </li>

                    )
                })
            }
        </ul>
    )

}

export default List;