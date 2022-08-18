import React from "react";


const EquipmentRow = (props) => {
    const {equipment} = props
    const {id, name, trades,sprite}  = equipment
    return(
    <tr>
        <td>
        <p>{id}</p>
        </td>
        <td>
        <p>{name}</p>
        </td>
        <td>
        <p>{trades.join(", ")}</p>
        </td>
        <td>
        <img alt={sprite} src={sprite} width="50"/>
        </td>
    </tr>
    )
}

export default EquipmentRow