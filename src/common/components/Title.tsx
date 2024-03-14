import { cn } from "@/lib/utils";
import { FC, ReactNode, memo } from "react";

export const Title: FC<{
    level?: number;
    children: ReactNode;
    className?: string;
}> = memo(({
    level = 6,
    children,
    className
}) => {

    const TitleComponent = () => {
        switch (level) {
            case 1:
                return <h1 className={cn("text-[32px] font-bold my-[15px] leading-[1.5]", className)}>{children}</h1>

            case 2:
                return <h2 className={cn("text-[28px] font-bold mt-[12px] leading-[1.5]", className)}>{children}</h2>

            case 3:
                return <h3 className={cn("text-[24px] font-bold mt-[10px] leading-[1.5]", className)}>{children}</h3>

            case 4:
                return <h4 className={cn("text-[18px] font-bold mt-[10px] leading-[1.5]", className)}>{children}</h4>

            case 5:
                return <h5 className={cn("text-[14px] font-bold mt-[10px] leading-[1.5]", className)}>{children}</h5>

            case 6:
                return <h6 className={cn("text-[12px] font-bold mt-[10px] leading-[1.5]", className)}>{children}</h6>

            default:
                break;
        }
    }

    return <TitleComponent />

})

Title.displayName = "Title";
