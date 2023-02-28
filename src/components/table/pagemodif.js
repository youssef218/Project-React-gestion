import './Tableau.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Pagemodif = (props) => {
  const location = useLocation()
  const data = new URLSearchParams(location.search).get('data')
const [afficher_element, setajouter] = useState([])

useEffect(() => {
  fetch(`http://localhost:8080/api/users/${data}`)
    .then(response => response.json())
    .then(data => {
      setajouter(data)
    })
    .catch(error => {
      console.error(error)
    })
}, [data])
console.log(afficher_element);
return (
  <>
  <section>
        <form action='' className=' block' >
          <label htmlFor='Nom'>firstName  : </label>
          <br />
          <input value={afficher_element.firstName} type='text' id='Nom' /> <br />

          <label htmlFor='marke'>lastName   : </label>
          <br />
          <input value={afficher_element.lastName}  type='text'  id='last' /> <br />
          
          <label htmlFor='dat'>Email : </label>
          <br />
          <input value={afficher_element.firstName}  type='email' id='email' /> <br />
          
          
          <br />
          <label>Gender: </label>
          <br />
          <input type='radio' name='gender' id='M' value='M' />
          <label htmlFor='M'>M</label>
          <input type='radio' name='gender' id='F' value='F' />
          <label htmlFor='F'>F</label>
          <br />
          <input type='submit' value='Ajouter'  />
        </form>
      </section>
  </>
)
}
export default Pagemodif
