import React, {useState} from 'react'

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const Location = (props) => {

    const [age, setage] = useState(0)

    function increaseAge () {setage (prevAge => prevAge + 1) }

    function decreaseAge () {setage (prevAge => prevAge - 1) }


return (

    <div>

        <label htmlFor = 'name'>Location: {props.name} </label>
        {' '}
        <label htmlFor = 'lastname'>Time: {new Date().toLocaleTimeString()} </label>
        {' '}
        <>
        <label htmlFor = 'email'>Age: </label>
        <button onClick = {increaseAge}><ArrowUpwardIcon></ArrowUpwardIcon></button>
        <span>{age}</span>
        <button onClick={decreaseAge}><ArrowDownwardIcon></ArrowDownwardIcon></button>
        </>        
        
    </div>

)


}



export default Location;



