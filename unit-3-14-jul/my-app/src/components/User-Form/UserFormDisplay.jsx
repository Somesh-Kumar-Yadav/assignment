import React from "react"
import axios from "axios";
export function UserFromDisplay() {
    const [employeeList, setEmployeeList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [filterData, setFilterData] = React.useState([]);
    const FilterList = (type) => {
        const data = employeeList.filter(item => {
            return item.department === type;
        })
        setFilterData([...data]);
        //console.log(data);
    }
    const SortList = (type) => {
        const data = filterData.sort((a, b) => {
            if (type) {   
                return Number(b.salary)-Number(a.salary);
            } else {
                return Number(a.salary)-Number(b.salary);
            }
        })
        setFilterData([...data]);
        //console.log(data);
    }
    const getList = () => {
        try{
            setIsLoading(true);
            axios.get("http://localhost:3004/employee").then(res => {
                setEmployeeList([...res.data])
            })
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    const DeleteEmployee = (id,department) => {
        axios.delete("http://localhost:3004/employee/" + id)
        getList();
        const data = employeeList
        setFilterData([...data])
    }
    React.useEffect(() => {
        setInterval(() => {
            getList();
        }, 1000)
    }, []);
    React.useEffect(() => {
        setTimeout(() => {
            const data = employeeList;
            setFilterData([...data])
        },1000)
    }, []);
    if (isLoading) {
        return <div>Loading...</div>
    }
    return <div>
        <div>
        <button onClick={() => { FilterList("Finance") }}>Finance</button>
        <button onClick={() => { FilterList("Marketing") }}>Marketing</button>
        <button onClick={() => { FilterList("Technical") }}>Technical</button>
        <button onClick={() => { FilterList("Human Resource") }}>Human Resource</button>
        
        </div>
        <div>
        <button onClick={() => { SortList(true) }}>Decreasing</button>
        <button onClick={() => { SortList(false) }}>Increasing</button>
        </div>
        <button onClick={() => { const data = employeeList;
            setFilterData([...data]) }}>All</button>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Married</th>
                <th>link</th>
            </tr>
            {filterData.map(e => {
                return <tr key={e.id}>
                    <td>{ e.name}</td>
                    <td>{ e.age}</td>
                    <td>{ e.address}</td>
                    <td>{e.department }</td>
                    <td>{ e.salary}</td>
                    <td>{ e.ismarried?"Yes":"No"}</td>
                    <td>{e.files}</td>
                    <button onClick={() => { DeleteEmployee( e.id,e.department ) }}>Delete</button>
                </tr>
            })}
</table>
    </div>
}