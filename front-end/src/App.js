import React, { useState } from 'react'

function App(){
  const [backendData, setBackendData] = useState([{}])
  const [searchQuery, setSearchQuery] = useState('');
  
  const linkStyle = {
    position: 'absolute',
    top: '20px',
    right: '10px',
  };
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
  
return (
  <div>
    <h1>Country Search</h1>
    <form onSubmit={handleSearch} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
      <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} style={{marginBottom: '50px', padding: '12px', borderRadius: '4px', border: '1px solid gray', marginRight: '8px', width: '200px'}} />
      <button type="submit" style={{marginBottom: '50px', padding: '12px', borderRadius: '12px', border: '1px solid gray', backgroundColor: 'lightblue', color: 'black'}}>Search</button>
    </form>
    {Object.keys(backendData).length > 1 && (
      <div>
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'left'}}>
          <img src={backendData.flags?.png} alt="Flag" style={{ border: '2px solid black', width: '400px' }} />
        </div>
      <div>
       <div style={{ float: 'right', textAlign : 'right', marginTop : '-320px', padding: '3px'}}>
       <img src={backendData.coatOfArms?.png || 'NULL'} alt="Coat of Arms" style={{ width: '300px' , height: 'auto', border: '2px solid black' }} />
       </div>
      </div>
      <p style={{ fontWeight: 'bold', textAlign : 'right', marginTop : '-350px', padding: '5px' }}>Coat of Arms</p>
        <div style={{ padding: '20px', marginLeft: '520px', marginTop: '0px', fontWeight : 'bold', fontSize : '17px'  }}>
        <p> Name: {backendData.name?.common || 'NULL'}</p> 
        <p> Official name: {backendData.name?.official || 'NULL'}</p>
        <p> Capital: {backendData.capital || 'NULL'}</p>
        <p> Region: {backendData.region || 'NULL'}</p>
        <p> Subregion: {backendData.subregion || 'NULL'}</p>
        <p> Continents: {Object.values(backendData.continents).join(', ') || 'NULL'}</p>
        <p> Languages: {Object.values(backendData.languages).join(', ') || 'NULL'}</p>
        <p> Area: {backendData.area || 'NULL'}m</p>
        <p> Population: {backendData.population || 'NULL'}</p>
        <p> Latitude and Longitude: ({backendData.latlng?.[0] || 'NULL'}, {backendData.latlng?.[1] || 'NULL'})</p>
        <p> Borders: {backendData.borders?.join(' , ') || 'NULL'}</p>
        <p> Timezones: {Object.values(backendData.timezones).join(', ') || 'NULL'}</p>
        <p> Currencies: {Object.keys(backendData.currencies).join(', ') || 'NULL'}</p>
        <p> Alternate Spellings: {backendData.altSpellings?.join(' , ') || 'NULL'}</p>
        <p> tld: {backendData.tld || 'NULL'}</p>
        <p> Status: {backendData.status || 'NULL'}</p>
        <p> Independent? {backendData.independent ? 'Yes' : 'No' || 'NULL'}</p>
        <p> Landlocked? {backendData.landlocked ? 'Yes' : 'No' || 'NULL'}</p>
        <p> UN Member? {backendData.unMember ? 'Yes' : 'No'}</p>
        <a href={backendData.maps.googleMaps} target="_blank" rel="noopener noreferrer" style={linkStyle}>View on Google Maps</a>
        </div>
      </div>
    )
   }
    </div>
  );
}

export default App