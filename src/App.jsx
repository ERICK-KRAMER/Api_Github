import React, { useState } from "react";
import { Container } from "./components/container/Container";
import { Github } from "./components/api/github";
import { FaGithub } from 'react-icons/fa'

export function App() {

  return(
    <>
      <h1 style={{textAlign:'center'}}>Consumindo Api do Github</h1>
      <div className="svg"><FaGithub /></div>
      <Container>
        <h3>Pesquisa de usuarios do Github</h3>
        <Github />
      </Container>
    </>
  )
}