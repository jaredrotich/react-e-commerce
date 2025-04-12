import {useState} from 'react';
 
 function SearchForm(props){
 
     const [searchTerm, setSearchTerm] = useState('');
 
     const handleSubmit = (e) => {
         e.preventDefault()
         props(searchTerm)
     }
     return (
         <form className="search-form" onSubmit={handleSubmit} >
             <input 
                 type="text"
                 placeholder="Find your product..."
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="search-input"
              />
             <button type="submit" className="form-button">Search</button>
         </form>
     )
 }
 
 export default SearchForm