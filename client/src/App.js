import React from 'react';
import './App.css';

function App() {
  return (
    <div id="layout">
      <header>HEADER</header>

      <main>
        <section id="content">
          <h1>Big Title</h1>
          <ul className="item-list">
            <li>
              <h2>Title 01</h2>
              <div>
                Proin ex nunc, bibendum ut magna quis.
              </div>
            </li>

            <li>
              <h2>Title 02</h2>
              <div>
                Blandit mollis orci. Ut pretium diam ut tristique interdum amet condimentum.
              </div>
            </li>

            <li>
              <h2>Title 03</h2>
              <div>
                Donec ut libero pretium, efficitur nisl vel, sagittis elit.
              </div>
            </li>
          </ul>
        </section>

        <aside>
          ASIDE
        </aside>

        <ul className="box-list">
          <li>Box 1</li>
          <li>Box 2</li>
          <li>Box 3</li>
          <li>Box 4</li>
        </ul>
      </main>

      <footer>FOOTER</footer>
    </div>
  );
};

export default App;