import { Link } from "react-router-dom"
export const LoginButton = (props:any) => {
  return (
    <button onClick={props.onClick}>
      <Link to={props.to} className='bg-[#43AFFF33] border border-[#43AFFF] rounded text-white p-2'>{props.label}</Link>
    </button>
  )
}

export const Button = (props:any) =>{
  return (
    <button className='bg-[#43AFFF] p-2 rounded text-white font-medium' onClick={props.onClick}>{props.label}</button>
  )
}