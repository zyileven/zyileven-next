import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'First Page',
}

export default async function FirstPage() {

    const res = await fetch("http://localhost:5000/users");
    if (!res.ok) {
        return <div>error</div>
    }

    const data = res.text();

    console.log("data")

    return (
        <div className="border-[1px] border-[#308] m-[10px]">
            first page {data}
        </div>
    );
}
