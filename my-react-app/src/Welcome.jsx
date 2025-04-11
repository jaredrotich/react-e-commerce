function Welcome(props){
    console.log(props)
    return <h4>Welcome to our React Ecommerce Website, {props.name} {props.title}!!</h4>
}

export default Welcome;