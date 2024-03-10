import CodeBlock from "@/common/CodeBlock";

export default async function LinkBgPage() {

    return (
        <div className="m-[10px]">
            <h1>一个有趣的 a 链接 hover 效果</h1>
            <a className='transition-all duration-300 ease-in-out bg-bottom bg-repeat-x text-[#0069ff] bg-[length:1px_1px] hover:bg-[length:100%_100%] bg-gradient-to-t from-[#0069ff] to-[#0069ff] hover:text-[#fff]' href="#">这是一个 a 链接</a>

            <div className="p-[10px] text-[24px]">
                实现原理：
            </div>

            <CodeBlock language="css" code={`.simple-linear {
    background-image: linear-gradient(to right, #0069ff, #0069ff);
    background-size: 1px 1px;
    background-position: bottom;
    background-repeat: repeat-x;
    transition: all ease-in-out .3s;
    }
.simple-linear:hover{
    background-size: 100% 100%;
}`}>
            </CodeBlock>
        </div>
    );
}
