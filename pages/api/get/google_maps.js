export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: 'John Doe' }))
  }

// export default (req, res) => {
//     const {
//       query: { pid },
//     } = req
  
//     res.end(`Post: ${pid}`)
//   }