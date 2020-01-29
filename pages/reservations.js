//DYNAMIC FORM, SERVER-SIDE RENDERING
import React from "react";

export default function Directions() {
  return (
    <section>
      <body>
        <div className="row my-5">
          <div className="col">
            <h1>Reservations</h1>
          </div>
        </div>

        <div className="row my-5" >

          <div className="col"></div>

          <div className="col">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter name"></input>
              </div>

              <div className="form-group">

                <input type="date" className="form-control" placeholder="Enter date"></input>
              </div>

              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>

        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col"></div>
      </body>
    </section>
  );
}

//SUBMIT BUTTON?
// import Router from 'next/router'

// function ReadMore() {
//   return (
//     <div>
//       Click <span onClick={() => Router.push('/about')}>here</span> to read more
//     </div>
//   )
// }

// export default ReadMore


// This page has defined `getInitialProps` to do data fetching.
// Next.js will execute `getInitialProps`
// It will wait for the result of `getInitialProps`
// When the results comes back Next.js will render the page.
// Next.js will do this for every request that comes in.
// import Layout from "/Users/jonkohen/Desktop/Portfolio/components/layout.js";
// import fetch from 'isomorphic-unfetch'

// function Reservations({ reservations }) {
//   return <div>Current reservations: {reservations}</div>
// }

// Reservations.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js') // API INFO
//   const json = await res.json()
//   return { reservations: json.current_reservations }
// }

// export default Reservations