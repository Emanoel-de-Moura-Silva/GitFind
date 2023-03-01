type SearchProps = {
    loadUser: (userName: string)=> Promise<void>;
}
import Classes from './Search.module.css'
import React, {useState, KeyboardEvent} from 'react'
import {BsSearch} from 'react-icons/bs'; 

export const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName);
    }
  }
  return (
    <div className={Classes.search}>
        <h2>Busque pro um usuario</h2>
        <p>Conheça os projetos</p>
        <div className={Classes.search_container}>
            <input type="text"
            placeholder='Digite o nome do usuario'
            onChange={(e)=>setUserName(e.target.value)}
            onKeyDown={handleKeyDown}/>
            <button onClick={() => loadUser(userName)}>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}