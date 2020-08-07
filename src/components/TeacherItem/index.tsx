import React from "react";
import api from "../../services/api";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {
  teacher: {
    avatar: string;
    bio: string;
    cost: number;
    id: number
    name: string
    subject: string
    user_id: number
    whatsapp: string;
  }
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.user_id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`http://wa.me/${teacher.whatsapp}`} >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
        
      </footer>
    </article>
  )
}

export default TeacherItem;