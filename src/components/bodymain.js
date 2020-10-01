import React from 'react';

import './bodyMainStyles.css';
import Data from './data.js';

function bodyMain(){

    function addEntryHandle(){
    
        let username = document.querySelector('.name').value;
        let userheight = document.querySelector('.height').value;
        let userweight = document.querySelector('.weight').value;
        let userage = document.querySelector('.age').value;
    
        const dataObj = {
            name: username,
            height: userheight,
            weight: userweight,
            age: userage
        }
        
        Data.push(dataObj)
        setTimeout(alert('success'),1500)
    }

    function formula(height,weight,age){
        return ((weight*703)/height**2).toFixed(2)
    }

    function getDataHandle(){

        let searchId = document.querySelector('.search-id').value;
        let dietPlanDiv = document.querySelector('.diet-plan-div');

        Data.forEach((entry)=>{

            if(entry.name === searchId){
                
                let bmi = formula(entry.height,entry.weight,entry.age);
                let status = null;
                if(bmi<18.5){
                    status = 'Underweight Check Below your diet plan';
                    dietPlanDiv.innerHTML = `
                    <p>NAME - ${entry.name}</p> <p>BMI - ${bmi}</p> <p>Status - ${status}</p> <hr/>
                    <h2>Underweight Diet Plan</h2>
                    <div>
                    <table class="table">
                    <tr>
                        <th>Time</th>
                        <th>Meal</th>
                    </tr>
                    <tr>
                        <td>8 am </td> <td>1 Glass of Milk, 2 Banana</td>
                    </tr>
                    <tr>
                        <td>10 am </td> <td> 4 Boiled Eggs, 2 Brown Bread with Salad</td>
                    </tr>
                    <tr>
                        <td>1 pm </td> <td> 250gm Chicken with 2 chapatis </td>
                    </tr>
                    <tr>
                        <td>4 pm </td> <td> 4 Boiled Eggs, 2 Boiled Potatoes</td>
                    </tr>
                    <tr>
                        <td>8 pm </td> <td> 100gm vege Dinner with 2 chapatis</td>
                    </tr>
                    <tr>
                        <td>10 pm </td> <td> 2 Boiled Eggs </td>
                    </tr>
                    </table>
                    </div>`
                }
                else if(bmi<24.9){ 
                    status = 'Normal - Ideal Diet Plan Required!';
                    dietPlanDiv.innerHTML = `
                    <p>NAME - ${entry.name}</p> <p>BMI - ${bmi}</p> <p>Status - ${status}</p> <hr/>
                    <h2>Ideal Diet Plan</h2>
                    <div>
                    <table class="table">
                    <tr>
                        <th>Time</th>
                        <th>Meal</th>
                    </tr>
                    <tr>
                        <td>8 am </td> <td> 1 Cup Green Tea</td>
                    </tr>
                    <tr>
                        <td>10 am </td> <td> 1 Egg-whites, 1 Cup Oats</td>
                    </tr>
                    <tr>
                        <td>1 pm </td> <td> Normal Meal with 2 chapatis </td>
                    </tr>
                    <tr>
                        <td>4 pm </td> <td> 1 Egg-whites, 1 Cup Oats</td>
                    </tr>
                    <tr>
                        <td>8 pm </td> <td> Normal Meal with 2 chapatis - No Rice</td>
                    </tr>
                    <tr>
                        <td>10 pm </td> <td> 1 Egg-whites </td>
                    </tr>
                    </table>
                    </div>`
                }
                else {
                    status = 'Overweight Check Below your diet plan';
                    dietPlanDiv.innerHTML = `
                    <p>NAME - ${entry.name}</p> <p>BMI - ${bmi}</p> <p>Status - ${status}</p> <hr/>
                    <h2>Overweight Diet Plan</h2>
                    <div>
                    <table class="table">
                    <tr>
                        <th>Time</th>
                        <th>Meal</th>
                    </tr>
                    <tr>
                        <td>8 am </td> <td> 1 Cup Green Tea</td>
                    </tr>
                    <tr>
                        <td>10 am </td> <td> 1 Egg-whites, 1 Cup Oats</td>
                    </tr>
                    <tr>
                        <td>1 pm </td> <td> Normal Meal with 2 chapatis </td>
                    </tr>
                    <tr>
                        <td>4 pm </td> <td> 1 Egg-whites, 1 Cup Oats</td>
                    </tr>
                    <tr>
                        <td>8 pm </td> <td> Normal Meal with 2 chapatis - No Rice</td>
                    </tr>
                    <tr>
                        <td>10 pm </td> <td> 1 Egg-whites </td>
                    </tr>
                    </table>
                    </div>`
                }
            }
        })
    }

    return(
        <div>
            <div className="main">
                <input type="text" className="name" placeholder=" Username" />
                <input type="number" className="age" placeholder="Age ( in Years )" /> 
                <input type="number" className="weight" placeholder="Weight in LB (1 KG = 2.05 LB)" />
                <input type="number" className="height" placeholder="Height in In (1 Ft = 12 In)" />
                <button className="submit" onClick={addEntryHandle} type="button">Submit</button>
            </div>


            <div className="track-div">
                <h2>Fitness Record</h2>
                <div>
                    <input type="text" className="search-id" placeholder="Enter User Name" />
                    <button className="get-data" onClick={getDataHandle} type="button">Get Data</button>
                </div>
                <p></p>
            </div>

            <div className="diet-plan-div">
                
            </div>
        </div>
    )
}

export default bodyMain;

