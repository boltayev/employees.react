import { Component } from 'react/cjs/react.production.min';
import './employees-list-item.css';

class EmployeesListItem extends Component {
		state = {
			rise: false,
			increase: false
		}
		onRise = () => {
			this.setState({ rise: !this.state.rise })
			this.props.onToggleRise(!this.state.rise)
		}

		onIncrease = () => {
			this.setState({increase: !this.state.increase})
			this.props.onToggleIncrease(!this.state.increase)
		}
    render() {
        let {name, salary, onDelete, increase, rise} = this.props
				let clazz = 'list-group-item d-flex justify-content-between'

				if(rise) {
					clazz += " like"
				}
				if(increase) {
					clazz += " increase"
				}
        return (
					<li className={clazz}>
						<span className='list-group-item-label' onClick={this.onRise}>{name}</span>
						<input
							type='text'
							className='list-group-item-input'
							defaultValue={`${salary}$`}
						/>
						<div className='d-flex justify-content-center align-items-center'>
							<button type='button' 
							className='btn-cookie btn-sm '
							onClick={this.onIncrease}
							>
								<i className='fas fa-cookie'></i>
							</button>

							<button type='button' className='btn-trash btn-sm '
							onClick={onDelete}>
								<i className='fas fa-trash'></i>
							</button>
							<i className='fas fa-star'></i>
						</div>
					</li>
				)
    }
}

export { EmployeesListItem };