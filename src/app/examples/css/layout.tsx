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
            <div className="max-w-[30%] w-[200px] border-r-[1px] border-[#eee] h-[100%] overflow-auto">
                <div className={`p-[10px] cursor-pointer  box-border ${pathname === "/examples/css/link-bg" ? "bg-[#07f] text-white" : "bg-white hover:bg-[#ddd]"}`}>
                    <Link href={"/examples/css/link-bg"}>链接背景效果</Link>
                </div>
            </div>
            <div className="w-[100%]">
                {children}
            </div>
        </div>
    );
}
