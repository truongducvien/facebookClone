import { useRouter } from "next/router"

export default function Show () {
    const router = useRouter()
    console.log(router )
    
    return (
        <h2>Show</h2>
    )
}