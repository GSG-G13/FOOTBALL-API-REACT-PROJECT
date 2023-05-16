import React from 'react';
import { render } from 'react-dom';

class Fetch extends React.Component {
    // constructor(props){
    //     super(props)
        state = {
            sportData: null
        // }
    }
    componentDidMount () {
        getSportData().then((data) => console.log(data))
        console.log(this.state.sportData)
    }
    render() {
        return (
            <div>ahmed {}</div>
            );
        }
        
    
}
const getSportData = () => {
   return fetch('http://localhost:4000/').then(res => res.json())
};
export default Fetch;