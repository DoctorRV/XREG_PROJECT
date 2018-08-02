import React, { Component } from 'react';
import './ShowICO.css'

export class ShowICO extends Component{
    handleChange=(ICO)=>{
        let _ICO=ICO;
        this.props.vote(_ICO)
    }

    render(){
        let ICOList=this.props.ICOs.map((ICO,i)=>
        <tr key={i}>
            <td onClick={this.handleChange.bind(this,ICO.name)}>{ICO.name}</td>
            <td>{ICO.rating}</td>
        </tr>)

        return(
            <div>
            <h3>***** ICOs Rated *****</h3>
            <hr />
            <table >
                <tbody>
                    <tr>
                        <th>ICO</th>
                        <th>Rating</th> 
                    </tr>
                    {ICOList}
                </tbody>
            </table>
          </div>
        )
    } 
}

export default ShowICO;