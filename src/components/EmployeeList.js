import React, {Component} from 'react'
import pic60x60 from "../img/1.png"


class EmployeeList extends Component {
  constructor(){
    super();
    this.handleCurrentIdChange = this.handleCurrentIdChange.bind(this)
    this.handleDeleteContact = this.handleDeleteContact.bind(this)
    this.handleOpenEditBox = this.handleOpenEditBox.bind(this)
  }
  handleCurrentIdChange(id){
    this.props.onCurrentIdChange(id);
  }
  handleDeleteContact(e, id){
     e.stopPropagation();
     this.props.onDeleteContact(id);
  }
  handleOpenEditBox(e, id){
    e.stopPropagation();
    this.props.onOpenEditBox(id);
  }
  render(){          
    let people = this.props.people.map(person => {
      let liStyle;      
      person.id === this.props.currentId ? liStyle = {background: "aqua"} : liStyle = {};

      return (
        <li style={liStyle} key={person.id} onClick={ () => this.handleCurrentIdChange(person.id)}>
                  <span onClick={ (e) => this.handleDeleteContact(e, person.id)} >x</span>
                  <img alt="person face" src={pic60x60} />
                  <div>{person.name}</div>
                  <label>{person.position}</label>
                  <button onClick={ (e) => this.handleOpenEditBox(e, person.id)} className="btn btn-primary btn-xs">Edit</button>
        </li>
      );     
    })
    return (
      <ul className="employeeList">{people}</ul>
    )
  }
}

EmployeeList.propTypes = {
  people: React.PropTypes.array.isRequired,
  currentId: React.PropTypes.number.isRequired,
  onCurrentIdChange: React.PropTypes.func.isRequired,
  onDeleteContact: React.PropTypes.func.isRequired,
  onOpenEditBox: React.PropTypes.func.isRequired
}



export default EmployeeList