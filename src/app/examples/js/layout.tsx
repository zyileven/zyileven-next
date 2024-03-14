"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBars = [
    {
        name: "定时器",
        path: "/examples/js/time",
    },
    {
        name: "数组",
        path: "/examples/js/array",
    }
]


export default function CSSDemoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    console.log("pathname", pathname)
    return (
        <div className="w-[100%] flex min-h-[calc(100vh_-_60px)]">
            <div className="max-w-[30%] min-w-[200px] border-r-[1px] border-[#eee] h-[100%] overflow-auto shadow-md">
                {
                    sideBars.map(bar => {
                        return <Link href={bar.path} key={bar.path} className={`block p-[10px] cursor-pointer  box-border ${pathname === bar.path ? "bg-[#07f] text-white" : "bg-white hover:bg-[#ddd]"}`}>
                        {bar.name}
                    </Link>
                    })
                }
            </div>
            <div className="w-[100%] flex justify-center bg-slate-50">
                <div className="max-w-[800px] w-[100%] shadow-md p-[20px] my-[20px] rounded-[5px] bg-white">
                    {children}
                </div>
            </div>
        </div>
    );
}
