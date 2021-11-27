import React, { Component } from 'react';
import EmpTable from './empTable';

class Home extends Component {
    state = {
        count:0,
        employee:{
            empId:1001,
            empName:"Kalyan",
            salary:10000

        },
        employees:[
            {
                empId:1001,
                empName:"Kalyan",
                salary:40000

            },
            {
                empId:1002,
                empName:"Ram",
                salary:30000
            },
            {
                empId:1003,
                empName:"Roop",
                salary:20000
            }
        ]


    }
    render() {
        return (
            <div>
              <EmpTable
                employees={this.state.employees}
                count={this.state.count}
                employee={this.state.employee}
              />
            </div>
          );
    }
}

export default Home;