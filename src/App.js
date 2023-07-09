import React from 'react';
import Character from "./components/character/Character";

const App = () => {
    return (
        <div>
            <Character id={1} name={"Rick Sanchez"} status={"Alive"} specias={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
            <Character id={2} name={"Morty Smith"} status={"Alive"} specias={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}/>
            <Character id={3} name={"Summer Smith"} status={"Alive"} specias={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}/>
            <Character id={4} name={"Beth Smith"} status={"Alive"} specias={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}/>
            <Character id={5} name={"Jerry Smith"} status={"Alive"} specias={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/5.jpeg"}/>
        </div>
    );
};

export default App;