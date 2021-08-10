import React from "react";
import { RestaurantDetails } from "./RestaurantDetails"
import styles from "./RestaurantForms.module.css"
import data from "./data.json"
function RestaurantForms() {
    console.log(data);
    const [formData,setFormData]=React.useState(data.data)
    const [filterData,setFilterData]=React.useState(data.data)
    const [payload,setPayload]= React.useState( {url:"",title:"",cash:"",card:"",rating:"",totalvotes:"",categories:"",costforone:""})
    const handleData = (e) => {
        const data = {
            ...payload,
            [e.target.name] : e.target.value
        }
        setPayload(data)
    }
    const SubmitData = (e) => {
        e.preventDefault()
        const data = [payload,...formData]
        setFormData(data);
        setFilterData(data);
    }
    const Sort = (basis) => {
      
        let data = formData;
            data.sort((a, b) => {
            return Number(a[basis])-Number(b[basis])
       })
        console.log(data);
       setFilterData([...data]);
    }
    const Sortreverse = (basis) => {
        
        let data = formData;
        data.sort((a, b) => {
            return Number(b[basis])-Number(a[basis])
        })
        console.log(data)
    setFilterData([...data]);
    }
    const Filter = (num) => {
        let data = formData;
        
            
            data=data.filter((a) => {
                return Number(a.rating) > num;
            })
        if (num !== 0) {
            data.sort((a, b) => {
                return Number(b["rating"]) - Number(a["rating"])
            })
        }
        
    setFilterData([...data]);
    }
    const FilterOut = (str) => {
        let data = formData;
        let st;
        if (str === "cash" || str === "card") {
            if (str === "cash") {
                st="card"
                data=data.filter((a) => {
                return a[str] === "Y"&& a[st]==="N";
            })
            } else {
               st="card"
                data=data.filter((a) => {
                return a[str] === "Y";
            })
            }
            
        }
        
    setFilterData([...data]);
    }
    return <div className={styles.cont}>
        <h1>Form to register restaurant</h1>
        <form onSubmit={SubmitData} className={styles.form}>
        <input type="text" name="title" placeholder="Enter restaurant name" value={ payload.title }onChange={handleData} />
        <input type="text" name="rating" placeholder="Enter current rating" value={ payload.rating }onChange={handleData} />
        <input type="text" name="categories" placeholder="Enter restaurant categories" value={ payload.categories }onChange={handleData} />
        <input type="text" name="totalvotes" placeholder="Enter total no. of votes given" value={ payload.totalvotes }onChange={handleData} />
        <input type="text" name="costforone" placeholder="Enter cost for one" value={ payload.costforone }onChange={handleData} />
        <input type="text" name="url" placeholder="Enter image url" value={ payload.url }onChange={handleData} />
        <input type="text" name="card" placeholder="Cash accepted (Y/N)" value={ payload.card }onChange={handleData} />
        <input type="text" name="cash" placeholder="Card accepted (Y/N)" value={ payload.cash }onChange={handleData} />
        <input className={styles.btn} type="submit" value="Submit" />
        </form>
        <div className={styles.btnCont}>
        <button onClick={()=>Sortreverse("costforone")}>H to L cost</button>
        <button onClick={()=>Sort("costforone")}>L to H cost</button>
        <button onClick={()=>Filter(4)}>Rating 4+</button>
        <button onClick={()=>Filter(3)}>Rating 3+</button>
        <button onClick={()=>Filter(2)}>Rating 2+</button>
        <button onClick={()=>Filter(1)}>Rating 1+</button>
        <button onClick={()=>FilterOut("card")}>Card Accepted</button>
        <button onClick={()=>FilterOut("cash")}>Cash Only Accepted</button>
        <button onClick={()=>FilterOut("")}>All</button>
        </div>
        <RestaurantDetails data={filterData}/>
        </div>
}
export { RestaurantForms };