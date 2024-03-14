"use client";
import React, { useEffect, useRef, FC, ReactNode } from "react";
import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
import "highlight.js/styles/monokai.css";
import { cn } from "@/lib/utils";

const CodeBlock: FC<{
    language?: string,
    className?: string,
    code: string,
}> = ({ language = "js", className, code }) => {
    const codeBlockRef = useRef(null);

    useEffect(() => {
        if (!codeBlockRef.current) {
            return;
        }
        hljs.highlightElement(codeBlockRef.current);
    }, [codeBlockRef]);

    return (
        <pre className={cn("mt-[20px] max-w-[100%]", className)}>
            <code ref={codeBlockRef} className={`language-${language} text-left`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeBlock;

