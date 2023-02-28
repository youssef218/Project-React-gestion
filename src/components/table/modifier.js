import { Link } from 'react-router-dom'

const Modifier = (props) => {
  return (
    <button>
      <Link to={{ pathname: `/Pagemodif/${props.id}`, search: `?data=${props.id}` }}>
      <i className='fa-solid fa-pen'></i>
      </Link>
    </button>
  )
}

export default Modifier
