import './App.css'
import Floorplan from "./Floorplan";
import Bedroom from './Bedroom';
import Bathroom from './Bathroom';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';


function  App() {
  return (  
    <div>
      <Floorplan />
      <Bedroom bedRoomNum={1} />
      <Kitchen />
      <Bathroom size="FUll" />
      <Bedroom bedRoomNum={2} />
      <LivingRoom />
      <Bathroom size="Half" />
      <Bedroom bedRoomNum={3}/>
      </div>
  );
}
 
export default App;