import React, {Component} from 'react'
import Input from "./Input"

class Edit extends Component {
  constructor(){
    super();
    this.handleChangeNamePosition = this.handleChangeNamePosition.bind(this)
    this.handleSaveEditBox = this.handleSaveEditBox.bind(this)
  }
  handleChangeNamePosition(e){
    this.props.onChangeNamePosition(e.target)
  }
  handleSaveEditBox(id){
    this.props.onSaveEditBox(id)
  }
  render(){
    if (this.props.show === true) {
      return (
        <div className="row edit">
          <div  className="col-xs-12">
            <div className="well">
              <Input onChange={this.handleChangeNamePosition} name="personName" placeholder="FullName" />
              <Input onChange={this.handleChangeNamePosition} name="personPosition" placeholder="Position" />
              <button onClick={() => this.handleSaveEditBox(this.props.personId)} className="btn btn-success btn-sm">Save</button>                      
              <button onClick={this.props.onCloseEditBox} className="btn btn-default btn-sm">Cancel</button>
            </div>
          </div>
        </div>
      )
    }
    return <div className="emptyDiv"></div>   
  }
}

Edit.propTypes = {
  show:React.PropTypes.bool.isRequired,
  personId: React.PropTypes.number.isRequired,
  onCloseEditBox: React.PropTypes.func.isRequired,
  onChangeNamePosition: React.PropTypes.func.isRequired,
  onSaveEditBox: React.PropTypes.func.isRequired
}

export default Edit
