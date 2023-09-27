import styled from 'styled-components'

export const Container = styled.div`
width: 600px;
border-radius: 7px;
padding: 1rem;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: transparent;
border: 1px solid lightgray;

@media screen and (max-width: 650px) {
    width:400px    
}
`