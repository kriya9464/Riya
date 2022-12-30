const Footer =({length}) => {
    const today= new Date();
    return (
        <footer>
            
            <p>Total Items in List {length}{/* Copyright &copy; {today.getFullYear()} */}</p>
        </footer>
    )
}

export default Footer