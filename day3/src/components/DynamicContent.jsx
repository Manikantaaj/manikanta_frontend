import React from 'react'
import Table from './Table'
import Heading from './Heading'

const DynamicContent = ({isLoggedIn}) => {
    const Component = isLoggedIn ? Heading : Table;
  return <Component/>;
    
        // {/* {isLoggedIn ? (<p>Welcome user</p>) : (<p>Please Login</p>)} */}
        // {/* {isLoggedIn && (<p>Welcome user</p>)} */}

        
   

}

export default DynamicContent