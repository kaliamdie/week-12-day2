import React from "react";

function Index({ id, pokemon }) {
	return (
		<div>
			<h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon[id].name[0].toUpperCase() + pokemon[id].name.slice(1)}</h2>
            <img src={pokemon[id].img + '.jpg'}></img>
            <a href='/pokemon'>
                <button>Go Back</button>
            </a>
		</div>
	);
}

export default Index;