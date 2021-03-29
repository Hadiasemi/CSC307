import React from 'react'
import Table from './Table'

const characters = [
  {
    name: 'Charlie',
    job: 'Janitor',
  },
  {
    name: 'Mac',
    job: 'Bouncer',
  },
  {
    name: 'Dee',
    job: 'Aspring actress',
  },
  {
    name: 'Dennis',
    job: 'Bartender',
  },
];



function MyApp() { 
    return ( 
      <div className = "container"> 
        <h1>Welcome :) </h1>
        <Table characterData ={characters}/>
      </div> 
    );  
}   

export default MyApp;