import React, { useState } from "react";
import { bookDB } from "./bookdatabase";
import "./styles.css";

const book = Object.keys(bookDB);

export default function App() {
  const [genre, setGenre] = useState("fiction");

  function clickGenre(genreKey) {
    setGenre(genreKey);
  }

  return (
    <div className="App">
      <h1 id="heading"> 📚 Bestbooks</h1>
      <h2 id="subheading">
        Checkout my favorite books. Select a genre to get started
      </h2>
      <hr></hr>

      <div id="booklist">
        {book.map((genre) => {
          return (
            <button id="btn" key={genre} onClick={() => clickGenre(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {bookDB[genre].map((book) => {
            return (
              <li className="list" key={book.name}>
                <div id="name">{book.name}</div>
                <div id="rating">{book.rating}</div>
                <div id="author">{book.author}</div>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
      <footer id="footer">
        <h5>© All rights reserved 2021</h5>
      </footer>
    </div>
  );
}
