import './Tableau.css'
import Tableau from './Tableau'
const Ajouter = () => {
  

  return (
    <>
      <section>
        <form action='' className=' block' >
          <label htmlFor='Nom'>firstName  : </label>
          <br />
          <input type='text' id='Nom' /> <br />

          <label htmlFor='marke'>lastName   : </label>
          <br />
          <input type='text'  id='last' /> <br />
          
          <label htmlFor='dat'>Email : </label>
          <br />
          <input type='email' id='email' /> <br />
          
          
          <br />
          <label>Gender: </label>
          <br />
          <input type='radio' name='gender' id='M' value='M' />
          <label htmlFor='M'>M</label>
          <input type='radio' name='gender' id='F' value='F' />
          <label htmlFor='F'>F</label>
          <br />
          <input type='submit' value='Ajouter' onClick={ajout} />
        </form>
        <Tableau />
      </section>
    </>
  )
}

const ajout = ()=>{
  let firstName= document.getElementById("Nom").value;
  let lasttName= document.getElementById("last").value;
  let email= document.getElementById("email").value;
  let gender = document.querySelector("input[name='gender']:checked");
  if (gender == null) {
    gender = " ";
  } else {
    gender = gender.value;
  }


  const data = {"firstName": firstName ,"lastName": lasttName ,"email": email ,"gender": gender };

  fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  


}
export default Ajouter
