import './Tableau.css'
import { useState, useEffect } from 'react'
import Suprimer from './suprimer'
import Modifier from './modifier'
const Tableau = props => {
  const [afficher_element, setajouter] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
      .then(data => {
        setajouter(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <div id='di'>
      <table id='tbl'>
        <thead>
          <tr>
            <th>Name</th>
            <th>last</th>
            <th>Email</th>
            <th>Genre</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {afficher_element.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>
                <Suprimer id={item.id}/>
                <Modifier id={item.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
export default Tableau
