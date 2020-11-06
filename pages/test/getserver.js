export default function GetServer(props){
    const {data} = props
    const result = data.map(item=><h1>{item.name}</h1>)
    return (
        <>
        <h1>Getserver</h1>
        {result}
        </>
    )
}

export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:8080/user')
        .then(res=>res.json())
    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
  }