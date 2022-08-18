import React from "react";
import EquipmentRow from "./EquipmentRow";


const EquipmentTable = (props) => {
    const {equipments, filterName} = props

    const filteredEquipments = filterName !== "All" ? equipments.filter((equipment => equipment.trades.includes(filterName))) : equipments
    return(
        <table>
            <thead>
            <tr>
            <th>
                ID
            </th>
            <th>
                Name
            </th>
            <th>
                Trades
            </th>
            <th>
                Sprite
            </th>
        </tr>
        </thead>
        <tbody>
        {filteredEquipments.map((item)=> (
        <EquipmentRow key={item.id} equipment={item}/>       
        ))
        }
        </tbody>
        </table>
    )
}

export default EquipmentTable