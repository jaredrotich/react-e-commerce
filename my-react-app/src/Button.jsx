import './Button.css'
 
 function Button({text, color, onClick}) {
     return (
         <button className={`button ${color}`} onClick={onClick}>{text}</button>
     );
 }
 
 //default props
 
 Button.defaultProps ={
     text: "click"
 }
 export default Button;