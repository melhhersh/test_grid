import React from "react";

const trades = ["plumbing", "electrical", "ice maker", "freezer", "refridgeration", "fire safety", "ventilation"]
const TableFilter = (props) => {
const handleFilterChange = (event) => props.setFilterName(event.target.value)

return (
    <div>
    <label htmlFor="equipmentTableTrades">Equipment TableTrades</label>
    <br/>
    <select name="equipmentTableTrades" id="equipmentTableTrades" onChange={handleFilterChange}>
        <option value="All">All</option>
        {trades.map((trade => (
            <option key={trade} value={trade}>{trade}</option>
        )))}
    </select>
  </div>
)
}

export default TableFilter