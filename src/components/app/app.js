import { AppInfo, SearchPanel, AppFilter, EmployeesList ,EmployeesAddForm } from '../'

import './app.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
	state = {
		employees: [
			{
				id: 1,
				name: 'Shohruz Isroilov',
				salary: 3000,
				rise: false,
				increase: true,
			},
			{
				id: 2,
				name: 'Jon Smith',
				salary: 2000,
				rise: false,                                                                  
				increase: false,
			},
		],
	}
	addItem = itemInfo => {
		this.setState(() => {
			return {
				employees: [...this.state.employees, itemInfo],
			}
		})
	}
	deleteItem = idEl => {
		this.setState(({ employees }) => {
			// let index = employees.findIndex((el) => el.id == idEl)
			// let beforeArr = employees.slice(0, index)
			// let afterArr = employees.slice(index + 1)
			// return {
			// 	employees: [...beforeArr, ...afterArr]
			// }
			return {
				employees: employees.filter(el => el.id !== idEl),
			}
		})
	}

	onToggleIncrease = (increase, id) => {
		let data = this.state.employees.map((employee) => {
			if(employee.id === id){
				return {...employee, increase}
			}
			return employee
		})
		this.setState(() => {
			return {
				employees: data
			}
		})
	}

	onToggleRise = (rise, id) => {
		let data = this.state.employees.map(employee => {
			if (employee.id === id) {
				return { ...employee, rise }
			}
			return employee
		})
		this.setState(() => {
			return {
				employees: data,
			}
		})
	}
	render() {
		let { employees } = this.state
		return (
			<div className='app'>
				<AppInfo />

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList 
				onDelete={this.deleteItem} 
				employees={employees}
				onToggleIncrease={this.onToggleIncrease}
				onToggleRise={this.onToggleRise} />
				<EmployeesAddForm addEmployee={this.addItem} />
			</div>
		)
	}
}
export { App };
