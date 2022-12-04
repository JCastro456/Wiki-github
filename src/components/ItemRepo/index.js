import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" className='repositorio' target="_blank">Ver repositório</a><br />
        <a href={repo.html_url} rel="noreferrer"className = "link" target="_blank"><i class="fa-solid fa-eye"></i> </a><br />
        <a href={repo.name}  rel="noreferrer" className="remover" onClick={handleRemoveRepo}>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
