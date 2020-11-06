
export default function GetStatic(props){
    const {data} = props
    const result = data.map(item=><h1>{item.name}</h1>)
    return (
        <>
        <h1>GetStatic</h1>
        {result}
        </>
    )
}

export async function getStaticProps(context){
    let data = await fetch('https://vastmadgenre--five-nine.repl.co/user')
        .then(res=>res.json())

    return {
        revalidate: 60,
        props: {
            data
        }, // will be passed to the page component as props
    }
  }