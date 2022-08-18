import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import EquipmentTable from "./EquipmentTable"
import TableFilter from "./TableFilter"

function App() {

const mockEquipments = [
  {
    id: 1,
    name: "Ice Maker",
    trades: ["plumbing", "electrical", "ice maker"],
    sprite: "https://images-na.ssl-images-amazon.com/images/I/61nc6V%2BnQ6L._AC_SX679_.jpg"
  }, 
  {
    id: 2,
    name: "Freezer",
    trades: ["electrical", "freezer"],
    sprite: "https://images.homedepot-static.com/productImages/e97ed152-f398-44ae-a056-dd593831888a/svn/stainless-steel-elite-kitchen-supply-commercial-freezers-eks-e60f-31_1000.jpg"
  },
  {
    id: 3,
    name: "Low Boy Refridgerator",
    trades: ["electrical", "refridgeration"],
    sprite: "https://globalcommercialkitchenequipment.com/wp-content/uploads/2020/08/frig_bench_lowboy_lbc090.jpg"
  },
  {
    id: 4,
    name: "Vent hood",
    trades: ["fire safety", "ventilation", "electrical"],
    sprite: "https://exhausthoodsystems.com/wp-content/uploads/2020/09/I31aHUIV1P2L-1.jpg"
  },
]

const [filterName, setFilterName] = useState("All")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TableFilter setFilterName={setFilterName}/>
        <br/>
        <EquipmentTable equipments={mockEquipments} filterName={filterName}/>
      </header>
    </div>
  );
}

export default App;
