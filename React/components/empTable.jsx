import React from 'react';

const EmpTable = (props) => {
    const {employees, count, employee} = props
    return (
        <div>
          <table className="table table-success table-striped w-50 mx-auto">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr>
                  <td>{emp.empId}</td>
                  <td>{emp.empName}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
 
export default EmpTable;
