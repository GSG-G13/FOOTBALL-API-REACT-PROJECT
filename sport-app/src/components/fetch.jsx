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
        getSportData().then((data) => this.setState(() => {
            console.log(data,'ss');
            return({sportData: data})
        }))
    }
    render() {
        console.log(this.state.sportData,'dd')
        return (
            <div>ahmed {JSON.stringify(this.state.sportData || 'not availabe')}</div>
            );
        }
        
    
}
const getSportData = () => {
   return fetch('http://localhost:4000/').then(res => res.json())
};
export default Fetch;