import React from "react"
import './App.css';

function App() {
  const [country, setCountry] = React.useState('');
  const [datas, setDatas] = React.useState();

  const main__section = async () => {
    if (country.length > 0) {
      const api__key = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
      const data = await fetch(api__key);
      const resp = await data.json();

      setDatas(resp[0])
    }
  }
  React.useEffect(() => {

    main__section();
  }, [country])


  console.log(datas)

  return (
    <div className="app">
      <div className="search__top">
        <input className="input__type" placeholder="enter country name" type="text" onChange={(event) => setCountry(event.target.value)} />
      </div>

      <div className="main__parties">
        <div className="name__country">
          <h2>country:</h2><span>{datas?.name}</span>
        </div>
        <div className="borders">
          <h2>borders:</h2><span>{datas?.borders.map(i => {
            return (
              <h6>{i}</h6>
            )
          })}</span>
        </div>
        <div className="country__code">
          <h2>country code:</h2><span>{datas?.callingCodes.map(ik => {
            return (
              <h4>{ik}</h4>
            )
          })}</span>
        </div>
        <div className="currency">
          <h2>currency:</h2><span>{datas?.currencies.map(i => {
            return (
              <h4>{i.name}</h4>
            )
          })}</span>
        </div>
        <div className="languages">
          <h2>languages:</h2><span>{datas?.languages.map(i => {
            return (
              <>
                <h4>{i.name}</h4>

              </>
            )
          })}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
