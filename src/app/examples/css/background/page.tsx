import CodeBlock from "@/common/CodeBlock";
import { Title } from "@/common/components/Title";
import Typography from "@/common/components/Typography";

const BackgroundPage = () => {
    return <div>
        <Title level={2}>
            background-size
        </Title>

        <Typography>
            background-size属性常用来调整背景图片的大小，主要用于设定图片本身。
        </Typography>

        <Typography className="font-bold">background-size: contain; 缩小图片以适合元素（维持像素长宽比）</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="bg-contain bg-no-repeat text-[#f00] w-[500px] h-[150px] m-[20px] p-[20px] border-[20px] border-dashed border-[#EEE] bg-[url('https://raw.githubusercontent.com/zyileven/image-hosting-platform/master/src/2024/03/14/c0dd33f9197d0bec70ec04b4d697e633-format,jpg-396a94.jpeg')]" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 20px</p>
            </div>
        </div>
        <Typography className="font-bold">background-size: cover; 扩展元素以填补元素（维持像素长宽比）</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="bg-cover bg-no-repeat text-[#f00] w-[500px] h-[150px] m-[20px] p-[20px] border-[20px] border-dashed border-[#EEE] bg-[url('https://raw.githubusercontent.com/zyileven/image-hosting-platform/master/src/2024/03/14/c0dd33f9197d0bec70ec04b4d697e633-format,jpg-396a94.jpeg')]" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 20px</p>
            </div>
        </div>
        <Typography className="font-bold">background-size: 100px 100px; 缩小图片至指定的大小</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="bg-[length:100px_100px] bg-no-repeat text-[#f00] w-[500px] h-[150px] m-[20px] p-[20px] border-[20px] border-dashed border-[#EEE] bg-[url('https://raw.githubusercontent.com/zyileven/image-hosting-platform/master/src/2024/03/14/c0dd33f9197d0bec70ec04b4d697e633-format,jpg-396a94.jpeg')]" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 20px</p>
            </div>
        </div>
        <Typography className="font-bold">background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包 含元素的尺寸</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="bg-[length:50%_100%] bg-no-repeat text-[#f00] w-[500px] h-[150px] m-[20px] p-[20px] border-[20px] border-dashed border-[#EEE] bg-[url('https://raw.githubusercontent.com/zyileven/image-hosting-platform/master/src/2024/03/14/c0dd33f9197d0bec70ec04b4d697e633-format,jpg-396a94.jpeg')]" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 20px</p>
            </div>
        </div>


        <Title level={2}>
            background-origin
        </Title>

        <Typography>
            当我们设置背景图片时，图片是会以左上角对齐，但是是以border的左上角对齐还是以padding的左上角或者content的左上角对齐?
        </Typography>

        <Typography className="font-bold">以padding的左上角为对齐点：background-origin: padding-box;</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="bg-no-repeat bg-origin-padding text-white w-[500px] h-[150px] m-[20px] p-[20px] border-[20px] border-dashed border-[#EEE] bg-[url('https://raw.githubusercontent.com/zyileven/image-hosting-platform/master/src/2024/03/14/c0dd33f9197d0bec70ec04b4d697e633-format,jpg-396a94.jpeg')] bg-cover" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 20px</p>
            </div>
        </div>
        <Typography className="font-bold">以border的左上角为对齐点：background-origin: border-box;</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="bg-no-repeat bg-origin-border text-white w-[500px] h-[150px] m-[20px] p-[20px] border-[20px] border-dashed border-[#EEE] bg-[url('https://raw.githubusercontent.com/zyileven/image-hosting-platform/master/src/2024/03/14/c0dd33f9197d0bec70ec04b4d697e633-format,jpg-396a94.jpeg')] bg-cover" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 20px</p>
            </div>
        </div>
        <Typography className="font-bold">以content的左上角为对齐点：background-origin: content-box</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="bg-no-repeat bg-origin-content text-white w-[500px] h-[150px] m-[20px] p-[20px] border-[20px] border-dashed border-[#EEE] bg-[url('https://raw.githubusercontent.com/zyileven/image-hosting-platform/master/src/2024/03/14/c0dd33f9197d0bec70ec04b4d697e633-format,jpg-396a94.jpeg')] bg-cover" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 5px</p>
            </div>
        </div>

        <Title level={2}>
            background-clip
        </Title>
        <Typography className="font-bold">background-clip: border-box(默认) 背景从border开始显示（background-clip: no-clip; 默认属性，等同于border-box）</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="w-[500px] h-[150px] m-[20px] p-[20px] border-[5px] border-dashed border-[#EEE] bg-[#f00]" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 5px</p>
            </div>
        </div>
        <Typography className="font-bold">background-clip: padding-box; 背景从padding开始显示</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="w-[500px] h-[150px] m-[20px] p-[20px] border-[5px] border-dashed border-[#EEE] bg-[#f00] bg-clip-padding" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 5px</p>
            </div>
        </div>
        <Typography className="font-bold">background-clip: content-box;背景从content区域开始显示</Typography>
        <div className="flex items-center outline-[1px] outline-dotted outline-[#000]">
            <div className="w-[500px] h-[150px] m-[20px] p-[20px] border-[5px] border-dashed border-[#EEE] bg-[#f00] bg-clip-content" >
            </div>
            <div>
                <p>margin: 20px</p>
                <p>padding: 20px</p>
                <p>border: 5px</p>
            </div>
        </div>
    </div>
}


export default BackgroundPage;
<div>

</div>
