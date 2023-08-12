import React from 'react'

export default function Index({pokemon}) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
        
        return (
            <div style={myStyle}>
                   <h1>See All The Pokemon</h1>
                   <ul style={{backgroundColor:"white"}} >
    {pokemon.map((item,index)=>{
           return( <li key={index} >
                <a href={`/pokemon/${index}`}>{item.name[0].toUpperCase()+ item.name.slice(1) }</a>
            </li>)
        })}
 </ul>
            </div>
        )}
