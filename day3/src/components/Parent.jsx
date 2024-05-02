import React from 'react'

exports class Parent extends Component{
    constructor() {
        super()
        this.state={count:0}
    }
    render(){
        console.log("Parent Render");
        
    }
}

export default Parent