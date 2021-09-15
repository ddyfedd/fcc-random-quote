function App() {
  
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuotes] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randIndex]);
    }
    fetchData();
  }, [])

  const getNewQuote = () => {
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuotes(quotes[randIndex]);
  }
  
  return (
    <div className="container pt-5">
      <div className="jumbotron">
        <div className="card" id="quote-box">
          <div className="card-header">Inspirational quotes</div>
          <div className="card-body">
            {randomQuote ? (
              <>
              <h5 className="card-title" id="author">- {randomQuote.author || "No author"}</h5>
              <p className="card-text" id="text">&quot;{randomQuote.text}&quot;</p>
              </>
            ) : (
              <h2>Loading</h2>
            )}

            <div className="row">
              <button id="new-quote" onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
              <a id="tweet-quote" href="https://www.twitter.com/intent/tweet" className="btn btn-warning">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.tumblr.com/" className="btn btn-danger">
                <i className="fa fa-tumblr"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))