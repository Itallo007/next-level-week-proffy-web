import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/59578084?s=460&u=74ff8ec6e4cb2e87eadb4167116e7e30d5f14695&v=4" alt="Itallo007"/>
        <div>
          <strong>Itallo Santos </strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Ensina matemática a 29 anos.
        <br/><br/>
        Não gosto de ensinar, dou aula apenas pelo salário. Não arredondo nota
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 5,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
        
      </footer>
    </article>
  )
}

export default TeacherItem;