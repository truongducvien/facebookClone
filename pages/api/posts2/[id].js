


export default function handler(req, res) {
    const { id } = req.query
    console.log(req)
    res.end(`Post: ${id}`)
}