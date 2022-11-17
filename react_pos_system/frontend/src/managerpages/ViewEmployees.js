import { useState, useEffect } from "react";
import ViewEmployeeRow from "../components/manager/ViewEmployeeRow";

const data = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Manager',
        clocked_in: true,
    },
    {
        id: 2,
        name: 'Janice Jones',
        role: 'Server',
        clocked_in: true,
    },
    {
        id: 3,
        name: 'Johnathan Flannagan',
        role: 'Chef',
        clocked_in: false,
    },
]

const ViewEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(data)
    }, [])

    return ( 
        <>
            <div className={"container"} style={{marginTop: '5%'}}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Clocked In</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return <ViewEmployeeRow employee={employee} />
                        })}
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default ViewEmployees;