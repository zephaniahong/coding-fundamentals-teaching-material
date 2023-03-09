/**
 * Request & Response
 *  - Client & Server
 *  - Asynchronous
 * APIs
 * - What is an API?
 * - RESTful APIs
 *  1. The client sends a request to the server. The client follows the API documentation to format the request in a way that the server understands.
 *  2. The server authenticates the client and confirms that the client has the right to make that request.
 *  3. The server receives the request and processes it internally.
 *  4. The server returns a response to the client. The response contains information that tells the client whether the request was successful.
 *     The response also includes any information that the client requested.
 */

// Request & Response (Client & Server)
// I am the client, making a REQUEST to the google URL. Some server will respond to this request by returning me some data.
// fetch("https://www.google.com").then((res) => {
//   console.log(res);
// });

// Asynchronous vs Synchronous
// console.log("I am after fetch");

// APIs
// Calling an API: I make a request through a RESTful API (which looks like a URL). The server hosting the API will then respond to my request
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("http://localhost:8000/")
//   .then((data) => data.json())
//   .then((data) => console.log(data));
