import React, {Component} from 'react'
import Input from "./Input"

class SearchBar extends Component {
  constructor(){
    super();
    this.handleFilterName = this.handleFilterName.bind(this)
  }
  handleFilterName(e){
    this.props.onFilterName(e.target.value)
  } 
  render() {
    return (      
        <form className="search-form">
            <div className="form-group has-feedback">              
              <Input onChange={this.handleFilterName} placeholder="search" />
              <span className="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
        </form>      
    )
  }
}

SearchBar.propTypes = {
  onFilterName: React.PropTypes.func.isRequired
}

export default SearchBar