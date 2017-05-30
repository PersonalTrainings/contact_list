import React from 'react'
const HeaderWrapper = (props) => <div className="row header">
                                    <div className="col-xs-12">
                                        {props.children}
                                    </div>
                                </div>;
const Header = ({hasArrow}) => hasArrow ? <HeaderWrapper>                                            
                                            <div className="text-primary text-center">Employee Directory</div>                                            
                                          </HeaderWrapper> :
                                          <HeaderWrapper>
                                            <div className="text-primary text-center">Employee</div>
                                         </HeaderWrapper>
                                       

export default Header