import { RestaurantCard } from "./RestaurantCard";
import {v4 as uuid} from "uuid"
function RestaurantDetails({ data }) {

       
    return <div>
       
        {
            data.map((el)=> {
                return <RestaurantCard data={el} key={ uuid()}/>
            })
       }
    </div>
}
export { RestaurantDetails };