import React from 'react';
import WorkCard from './WorkCard';
import diceGame from '../images/diceGame.png'
import rmsystem from '../images/rmsystem.png'
import nand2tetris from '../images/nand2tetris.png'
import khms from '../images/khms.png'
import whack from '../images/whack.png'
import quickBill from '../images/quickBill.png'
import recipeBook from '../images/recipe-book.png'


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
                                image={rmsystem} title="Railway Management System"
                                text="JAVA swing app used to implement data structures in daily life"
                                demo=""
                                github="https://github.com/Abhinavxox/Railway-Management-System"
                            /></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={nand2tetris} title="Nand2Tetris Project"
                                text="Made Assembler, VM Translator, Syntax Analyser and Compiler for HACK and binary conversion"
                                demo=""
                                github="https://github.com/Abhinavxox/NandToTetris"
                            /></div>
                        </div>
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={khms} title="Kitchen Hazard Management System"
                                text="Implemented LPG and Temperature detection system in tinkercad and LTSpice"
                                demo="https://www.tinkercad.com/things/806IodcEOs4-kichen-hazard-management/editel"
                                github="https://github.com/Abhinavxox/Kitchen-Hazard-Management-System"
                            /></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={whack} title="Whack-a-Mole"
                                text="Classic whack a mole game made using vanila JS"
                                demo="https://abhinavxox.github.io/Whack-a-mole/"
                                github="https://github.com/Abhinavxox/Whack-a-mole/"
                            /></div>
                        </div>
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={quickBill} title="Quick-Bill"
                                text="Desktop app made in JAVA SWING using MVC framework and SQL connectivity"
                                demo=""
                                github="https://github.com/Abhinavxox/Quick_Bill"
                            /></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="ui segment"><WorkCard
                                image={recipeBook} title="Recipe-Book App"
                                text="Used Edamam api ko make a simple react recipe book app"
                                demo=""
                                github="https://github.com/Abhinavxox/Recipe-Book-App.git"
                            /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work