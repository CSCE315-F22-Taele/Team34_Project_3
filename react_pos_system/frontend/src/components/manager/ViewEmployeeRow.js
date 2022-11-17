function placeClockedIn(clocked_in) {
    if (clocked_in)
        return <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled></input>
    return <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled></input>
}

const ViewEmployeeRow = ({ employee }) => {
    return (
        <tr>
            <td><b>{employee.id}</b></td>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td>
                {placeClockedIn(employee.clocked_in)}
            </td>
        </tr>
    );
}

export default ViewEmployeeRow;