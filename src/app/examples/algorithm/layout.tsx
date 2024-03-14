"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CSSDemoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    console.log("pathname", pathname)
    return (
        <div className="w-[100%] flex h-[calc(100vh_-_60px)]">
            <div className="max-w-[30%] min-w-[200px] border-r-[1px] border-[#eee] h-[100%] overflow-auto">
                <div className={`p-[10px] cursor-pointer  box-border ${pathname === "/js-demo/time" ? "bg-[#07f] text-white" : "bg-white hover:bg-[#ddd]"}`}>
                    <Link href={"/js-demo/time"}>定时器</Link>
                </div>
            </div>
            <div className="w-[100%]">
                {children}
            </div>
        </div>
    );
}
