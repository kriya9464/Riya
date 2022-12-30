
const Searchitems = ({search, setsearch}) => {
  return (
    <form className='searchItem' onSubmit={(e) => e.preventDefault()}>
        <input id='search' type='text' placeholder='search box' value={search} onChange={(e)=> setsearch(e.target.value)} /> 
    </form>
  )
}

export default Searchitems