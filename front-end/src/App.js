import React, { useEffect, useState } from 'react'

function App(){
  const [backendData, setBackendData] = useState([{}])
  const [searchQuery, setSearchQuery] = useState('');
  
  // useEffect(() =>{
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //       console.log(data)
  //     }
  //   ).catch(error => {
  //     console.error(error);
  //   })
  // }, [])

  // useEffect(() => {
  //   if (searchQuery) {
  //     fetch('/api', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ country: searchQuery })
  //     }).then(response => response.json())
  //       .then(data => {
  //         setBackendData(data);
  //         console.log(data)
  //       });
  //   }
  // }, [searchQuery]);

  const fetchData = () => {
    if (searchQuery) {
      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ country: searchQuery })
      }).then(response => response.json())
        .then(data => {
          setBackendData(data);
          console.log(data);
        });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData();
  };
  
  return(
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
        <button type="submit">Search</button>
    </form>
    {Object.keys(backendData).length > 0 &&
    <div>
        <p> Name : {backendData.name.common}</p>
        <p> Official name : {backendData.name.official}</p>
        <p> Region : {backendData.region}</p>
        <p> Languages : {backendData.languages.eng}</p>
        <p> Flag : {backendData.flag}</p>
        <p> Area : {backendData.area}m</p>
        <img src={backendData.flags.png} alt="My logo" /> 
    </div>
}
    </div>
  )
}

export default App