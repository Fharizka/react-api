
import React, { Component } from "react"

class App extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      film:[]
    }
  }

  cariFilm= () => {
    // console.log("ini filmnya")
    // console.log(this.state.keyword)
    fetch(`http://www.omdbapi.com/?apikey=6d1f3e3e&s=${this.state.keyword}`)
      .then(response => response.json())
      .then(result => {
        this.setState({
          film: result.Search
        })
      })

  }

  namaFilm = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }

  render(){
    return(
      <>
      <h1>ini fentch api</h1>
      <input type="text" onChange={this.namaFilm}></input>
      <button onClick={this.cariFilm}>klik</button>
        <>
          {this.state.film.map(post => (
            <div key={post.imdbID}>
              <h2>{post.Title}</h2>
              <img src={post.Poster}></img>
            </div>
          )
          ) } 
        </>
      </>
    )
  }

}


export default App;
