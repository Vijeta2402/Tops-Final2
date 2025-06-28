/*Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles 
– using components as a low-level styling construct could not be easier!*/

import React  from "react";
import styled from 'styled-components';

function styled_component(){
    const Title = styled.h1`
    font-size:1.5em;
    text-align: center;
    color: palevioletred;
    background-color:red;
    `;

    const Basic = styled.button`
    font-weight:border;
    border-radius:10px;
    padding:10px 35px;
    color:white;
    display:block;
    margin:0 auto;
    background-color:Lightgray;
    `;
    const MyButton = styled.button`
    border:2px solid  palevioletred;
    border-radius:10px;
    `;

    return(
        <div>
            <h1>styled-component</h1>
        </div>
    )
}
export default styled_
component