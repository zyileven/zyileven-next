import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface TypographyProps {
    children: ReactNode;
    className?: string;
}

const Typography: React.FC<TypographyProps> = ({ children, className }) => {

    return <p className={cn('my-[10px] leading-[1.5]', className)}>{children}</p>;
};

export default Typography;