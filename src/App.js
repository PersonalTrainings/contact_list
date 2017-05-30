import React, { Component } from 'react';
import "./App.css";
import Box from "./components/Box"
import EmployeeHeader from "./components/Header"
import SearchBar from "./components/Search"
import Edit from "./components/Edit"
import EmployeeList from "./components/EmployeeList"
import EmployeeDetails from "./components/EmployeeDetails"


class App extends Component {
    constructor(){
    super();
    this.state = {
      personId: 1,
      filter: "",
      show: false,
      currentId: 1,
      people: []
    }          

    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleCurrentIdChange = this.handleCurrentIdChange.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
    this.handleCloseEditBox = this.handleCloseEditBox.bind(this);
    this.handleOpenEditBox = this.handleOpenEditBox.bind(this);
    this.handleChangeNamePosition = this.handleChangeNamePosition.bind(this);
    this.handleSaveEditBox = this.handleSaveEditBox.bind(this);
  }
  componentWillMount() {
    fetch("https://api.myjson.com/bins/15iocv").then(response => response.json())
                                               .then(obj => this.setState({people: obj.people}))
                                               .catch(err => console.warm("Error in fetch request", err))
  }
  handleFilterName(filterText){
    this.setState({filter: filterText})
  }
  handleCurrentIdChange(currentId){
    this.setState({currentId: currentId})
  }
  handleDeleteContact(deleteId){        
    this.setState({people: this.state.people.filter(person => person.id !== deleteId)})
  }  
  handleCloseEditBox(){
    this.setState({show: false})
  }
  handleOpenEditBox(personId){        
    this.setState({show: true, personId: personId})    
  }
  handleChangeNamePosition(target){    
    target.name === "personName" ? this.setState({personName: target.value}) : this.setState({personPosition: target.value})    
  }
  handleSaveEditBox(givenId){
    let newPeople = this.state.people.map(person => {
    if (person.id === givenId) {
      person.name = this.state.personName || person.name;
      person.position = this.state.personPosition || person.position;
    }
    return person;
    })
  
    this.setState({show: false, people: newPeople, currentId: givenId})  
  }
  render() {
    // Our items go in filter method for searchBar and also we pass it in EmployeeList
    let items = this.state.people;
    if(this.state.filter){
      items = items.filter(item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }
    return (
        <Box>
          <div className="left-side">
            <EmployeeHeader hasArrow={true} />
            <SearchBar onFilterName={this.handleFilterName} />
            <Edit 
             show={this.state.show}             
             personId={this.state.personId}             
             onCloseEditBox={this.handleCloseEditBox}
             onChangeNamePosition={this.handleChangeNamePosition}
             onSaveEditBox={this.handleSaveEditBox} />           
            <EmployeeList
             people={items}
             currentId={this.state.currentId} 
             onCurrentIdChange={this.handleCurrentIdChange}
             onDeleteContact={this.handleDeleteContact}
             onOpenEditBox={this.handleOpenEditBox} />
          </div>
          
          <div className="right-side">
            <EmployeeHeader />
            <EmployeeDetails people={this.state.people} currentId={this.state.currentId}/>
          </div>
      </Box>
    );
  }
}

export default App
