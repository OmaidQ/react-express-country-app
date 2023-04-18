import React, { useEffect, useState } from 'react'

function App(){
  const [backendData, setBackendData] = useState([{}])
  const [searchQuery, setSearchQuery] = useState('');
  
  const linkStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
  };
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
        <p> Capital : {backendData.capital}</p>
        <p> Region : {backendData.region}</p>
        <p> Subregion : {backendData.subregion}</p>
        <p> Languages : {backendData.languages.eng}</p>
        <p> Flag : {backendData.flag}</p>
        <p> Area : {backendData.area}m</p>
        <p> Population : {backendData.population}</p>
        <p> Independent : {backendData.independent}</p>
        <p> Status : {backendData.status}</p>
        <p> Latitude and Longitude : {backendData.latlng}</p>
        <p> Landlocked? : {backendData.landlocked}</p>
        <p> Countries it borders : {backendData.borders}</p>
        <p> tld : {backendData.tld}</p>
        <p> UN Member? : {backendData.unmember}</p>
        <a href={backendData.maps.googleMaps} target="_blank" rel="noopener noreferrer" style = {linkStyle}>View on Google Maps</a>
        <img src={backendData.flags.png} alt="My logo" /> 
        <img src={backendData.coatOfArms.png} alt="My logo" />
    </div>
}
    </div>
  )
}

export default App