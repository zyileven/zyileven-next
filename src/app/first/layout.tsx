"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FirstLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    console.log("pathname", pathname)
    return (
        <div>
            <div className="w-[100%] border-b-[1px] border-[#eee] min-h-[60px]">
                here is first page
            </div>
            <div className="w-[100%] flex h-[calc(100vh_-_60px)]">
                <div className="max-w-[30%] w-[200px] border-r-[1px] border-[#eee] h-[100%] overflow-auto">
                <div className={`p-[10px] cursor-pointer  box-border ${pathname === "/first/chart" ? "bg-[#07f] text-white" : "bg-white hover:bg-[#ddd]"}`}><Link href={"/first/chart"}>link1</Link></div>
                    {
                        (new Array(10).fill(0)).map(i => {
                            return <div key={i} className={`p-[10px] cursor-pointer  box-border ${i === 1 ? "bg-[#07f] text-white" : "bg-white hover:bg-[#ddd]"}`}><Link href={"/first"}>link1</Link></div>
                        })
                    }
                </div>
                <div className="w-[70%]">
                    {children}
                </div>
            </div>
        </div>
    );
}
