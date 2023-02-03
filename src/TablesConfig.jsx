import React, {useState} from "react";
import "./style.css"
function TablesConfig(props) {
    console.log(props.data.columns[0].items[1].caption)
    const [data, setData] = useState(props.data)
    console.log(data)
    function addColumnHandler () {
        data.columns[0].items.push({
            dataField: "data",
            caption: "caption_n",
            dataType: "dataType",
            format: "format",
            alignment: "alignment"
        })
    }
    return (
        <table>
            <caption>A test challenge</caption>
            <thead>
            <tr>
                { data.columns[0].items.map((item) => {
                    return <th scope="col">{item.caption}</th> })
                }
                <th className="addColumn" onClick={() => addColumnHandler}>+</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Buzzcocks</th>
                <td>1976</td>
                <td>9</td>
            </tr>
            <tr>
                <th scope="row">The Clash</th>
                <td>1976</td>
                <td>6</td>
            </tr>
            </tbody>
        </table>
    );
}

export default TablesConfig;