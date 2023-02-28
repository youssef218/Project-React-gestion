const Suprimer = props => {
  const ide = props.id

  return (
    <button className=' mr-3' onClick={() => supper(ide)}>
      <i className='fa-regular fa-circle-xmark'></i>
    </button>
  )
}
function supper (parametre) {
  if (parametre !== null) {
    fetch(`http://localhost:8080/api/users/${parametre}`, {
      method: 'DELETE'
    })
  }
  window.location.reload()
}

export default Suprimer
