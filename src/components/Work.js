import React from 'react';
import WorkCard from './WorkCard';
import diceGame from '../images/diceGame.png'

const Work = () => {
    return (
        <div className='padded-work'>
            <div className='ui segment work'>
                <div class="ui stackable two column vertically divided grid container fontCustom">
                    <div class="row">
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={diceGame} title="Dice Game"
                                text="Simple dice game made using vanila JS"
                                demo="https://abhinavxox.github.io/DIcegame/"
                                github="https://github.com/Abhinavxox/DIcegame"
                            /></div>
                        </div>
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={diceGame} title="Dice Game"
                                text="Simple dice game made using vanila JS"
                                demo="https://abhinavxox.github.io/DIcegame/"
                                github="https://github.com/Abhinavxox/DIcegame"
                            /></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={diceGame} title="Dice Game"
                                text="Simple dice game made using vanila JS"
                                demo="https://abhinavxox.github.io/DIcegame/"
                                github="https://github.com/Abhinavxox/DIcegame"
                            /></div>
                        </div>
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={diceGame} title="Dice Game"
                                text="Simple dice game made using vanila JS"
                                demo="https://abhinavxox.github.io/DIcegame/"
                                github="https://github.com/Abhinavxox/DIcegame"
                            /></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={diceGame} title="Dice Game"
                                text="Simple dice game made using vanila JS"
                                demo="https://abhinavxox.github.io/DIcegame/"
                                github="https://github.com/Abhinavxox/DIcegame"
                            /></div>
                        </div>
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={diceGame} title="Dice Game"
                                text="Simple dice game made using vanila JS"
                                demo="https://abhinavxox.github.io/DIcegame/"
                                github="https://github.com/Abhinavxox/DIcegame"
                            /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work