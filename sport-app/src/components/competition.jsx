import React from 'react';
import { render } from 'react-dom';
import {CiSearch} from 'react-icons/ci';

class Fetch extends React.Component {
    
        state = {
            sportData: null,
            competitionName: null
        
    }

    // here is the medthods i will use 

    getSearchValue() {
        this.setState(() => {
            return (
                {competitionName: document.querySelector('#searchbar').value}
            )
        })
    }


    getSportData() {
        return fetch(`http://localhost:4000/SpecificCompetitiondata/${this.state.competitionName}`).then(res => res.json())
     }
    

    getCompetitionsNameAndImageLink () {
        fetch(`http://localhost:4000/getcompitionsnames`).then(res => res.json()).then(res => {

        })
    }

 

   // react life cycle componenets 
   
    componentDidUpdate (prev) {
        if (prev.state.competitionName !== this.state.competitionName) {

            this.getSportData().then((data) => this.setState(() => {
                return({sportData: data})
            }))

        }

    }

    componentDidMount () {

    }

    render() {
        return (
            <div>
                <div className="searchbar"> <input onChange={console.log(123)} placeholder="  Search for compitision" id="searchbar"></input>
             <button id='submit' onClick={() => this.getSearchValue}>search</button>
             
             </div>
            </div>
            );
        }
        
    
}
 
export default Fetch;