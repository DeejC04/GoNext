export default async function ViewHours() {
    let data = await fetch('http://localhost:8080/viewHours?hours=12', {cache: "no-store"})   
    let posts = await data.json()
    return (
        <div>{posts}</div>
    )
}