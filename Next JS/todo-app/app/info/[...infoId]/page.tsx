

export default async function ExtraInfo({params} : any) {
    return <div>
        {JSON.stringify((await params).infoId)}
        hello
    </div>
}