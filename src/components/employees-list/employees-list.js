import { Component } from "react/cjs/react.production.min";
import {EmployeesListItem} from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        let { employees, onDelete, onToggleIncrease, onToggleRise } = this.props
        return (
            <ul className='app-list list-group'>
                {
                    employees.map((employee, i) => {
                        let {name, salary, id, increase, rise} = employee
                        return <EmployeesListItem 
                        key={id}
                        name={name}     
                        salary={salary}
                        increase={increase}
                        rise={rise}
                        onToggleIncrease={(incr) => {
                            onToggleIncrease(incr, id)
                        }}
                        onToggleRise={(rise) => {
                            onToggleRise(rise, id)
                        }}
                        onDelete={() => onDelete(id)}
                        />
                    })
                }
            </ul>   
        )
    }
}

export { EmployeesList }