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

            一个有趣的 a 链接 hover 效果
            <a className='transition-all duration-300 ease-in-out bg-bottom bg-repeat-x text-[#0069ff] bg-[length:1px_1px] hover:bg-[length:100%_100%] bg-gradient-to-t from-[#0069ff] to-[#0069ff] hover:text-[#fff]' href="#">这是一个 a 链接</a>
        </div>
    );
}
