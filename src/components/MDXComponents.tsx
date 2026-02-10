import { AnimatedPre } from "./AnimatedCodeBlock";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(): MDXComponents {
    return {
        pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
            return <AnimatedPre {...props} />;
        },
    };
}
