import { SwipeableDrawer } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
    }, []);

    console.log(people);
        /*[
        {
            name: 'Elon Musk',
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/800px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
        },
        {
            name: 'Jeff Bezos',
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
        },
    ]);*/

    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

  return (
    <div className='tinderCards'>
        <div className='tinderCards_cardContainer'>
            {people.map(person =>(
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                        style={{backgroundImage: "url(" +person.imgUrl + ")"}}
                        className="card"
                     >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
        
    </div>
  );
}

export default TinderCards