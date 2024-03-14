import CodeBlock from "@/common/CodeBlock";
import { Title } from "@/common/components/Title";
import Typography from "@/common/components/Typography";

export default async function ArrayPage() {

    return (
        <div className="m-[10px] select-none">
            <h1 className="text-center">Array 数组</h1>

            <div className="p-[10px] mb-[50px] text-center">
                作者: zyileven  日期：2024-03-12
            </div>

            <Typography>
                数组是一种线性表数据结构，是一种有序的集合。数组中的元素可以是任意数据类型。
            </Typography>

            <Title level={2}>
                一、Array 增删改查
            </Title>

            <Title level={3}>
                1. 为数组增加元素
            </Title>

            <Title level={4} className="text-emerald-500">
                Array.prototype.concat()
            </Title>

            <Typography>
                为数组 A 添加元素，返回新数组，首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组。
                <span className="text-red-700">(不变更原来的数组)</span>
            </Typography>

            <CodeBlock code={concatCode} />
        </div>
    );
}


const concatCode = `
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]
`