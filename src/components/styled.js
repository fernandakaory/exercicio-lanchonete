import styled from 'styled-components'

export const StyledCabecalho = styled.header`
background-color: aliceblue;

nav {
display: flex;
flex-direction: row; 
justify-content: space-between; 
align-items: center;
width: 100%;
background-color: #ffffff;
/* border-bottom: 2px solid ; */
padding: 1rem 2.5rem;
}

div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

img{
    width: 100%;
    height: 100%;
}

h1 {
    font-family: 'Handjet', cursive;
    font-size: 2.5em;
    color: #fc7e7e;
}

ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}

li {
    display: flex;
    padding: 1rem;
}

& li:hover {
    background-color: #fc7e7e;
    color: #ffffff;
    border-radius: 3px;
}


& a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fc7e7e;
}

p {
    margin: 0;
    text-align: center;
    padding: 1rem 0.6rem;
    background-color: #fc7e7e;
    color: #ffffff;
}

`

export const StyledRodape = styled.footer `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:black;
/* border-top: 1px solid black; */
margin-top: 4em;
padding: 3em;
gap: 20px;
background-color:#fc7e7e;




.rodape__informacoes {
    text-align: center;
    color: aliceblue;
}
.rodape__links {
    display: flex;
    justify-content: space-evenly;
    gap: 15px;
    margin-top: 1rem;
}

.rodape__links img {
    width: 70%;
}

`