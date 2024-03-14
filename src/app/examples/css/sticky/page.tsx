
const StickyPage = () => {
    return <div>
        <h1 className="text-[32px] font-bold text-center">
            黏性布局 Sticky
        </h1>

        <div className="text-[24px] font-bold">
            一、双侧单边滚动
        </div>
        
        <p>
            经常看到有些网页上有那种滚动的时候左边的内容股东而右边的内容滚动的效果
        </p>

        <iframe src="https://codesandbox.io/embed/8cgq5d?view=preview&module=%2Findex.html&hidenavigation=1"
            className="w-[100%] h-[500px] border-0 rounded-[4px] overflow-hidden"
            title="sticky"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

    </div>
}


export default StickyPage;