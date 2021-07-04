import React from 'react';
import '../../charityappcss/style.css';

function List(){
    return(
        <div className='dropdown'> <br></br><br></br>
           

            <table className="t1">
           <td> <select>
                <option >Locations</option>
                <option>Bangalore</option>
                <option>Kolkata</option>
            </select></td><td></td><td></td>
            <td>  <select>
                <option>Status</option>
                <option>Completed</option>
                <option>On-going</option>
            </select></td><td><td></td></td>
           <td> <select>
                <option>Amount</option>
                <option>below 500</option>
                <option>500-1000</option>
            </select></td>
            </table>

        </div>

    )
}


export default List;