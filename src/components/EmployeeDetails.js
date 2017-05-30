import React from 'react'
import pic80x80 from "../img/2.png"

const EmployeeDetails = (props) => {  
  let person = props.people.filter(person => person.id === props.currentId);
  
  let contactHeader = person.map((item, i) => <div className="employeeHeader" key={i}>
                                                <img alt="avatar" src={pic80x80} />
                                                <div>{item.name}</div>
                                                <label>{item.position}</label>
                                              </div> );

  let contactList = person.map((list, i) => <div className="contactList" key={i}>
                                              <div>{list.details.officeName}</div>
                                              <label>{list.details.officeNumber}</label>
                                              <div>{list.details.mobileName}</div>
                                              <label>{list.details.mobileNumber}</label>
                                              <div>{list.details.smsName}</div>
                                              <label>{list.details.smsNumber}</label>
                                              <div>{list.details.emailName}</div>
                                              <label>{list.details.emailAddress}</label>
                                            </div> );
  return (    
    <div className="contactHeader">
      {contactHeader}
      {contactList}                       
    </div>
  )
}


export default EmployeeDetails