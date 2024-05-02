
import Child from './Child'
import React, {useState} from 'react'

// const ParentProps = (props) => {
//   return (
//     <div>
//         <Child {...props}/>
//     </div>
//   )
// }
export const DataContext = React.createContext();
const ParentProps = () =>{
    const [data, setData] = useState(0)

    return (
        <DataContext.Provider value={[data,setData]}>
            <Child/>
        </DataContext.Provider>
    )
}

export default ParentProps