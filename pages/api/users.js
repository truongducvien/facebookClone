import { users } from "../../assets/data/pageData"

export default function handler(req, res) {
    res.status(200).json({...users})
}