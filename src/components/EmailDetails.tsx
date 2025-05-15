import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useCopyToClipboard} from "usehooks-ts"
export default function EmailDetails() {
    const [value, copy] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);

    return (
        <div className="bg-slate-900 border-r border-gray-400/50 pr-3 font-normal p-3 rounded-lg flex items-center">
            <button
                onMouseLeave={() => setCopied(false)}
                onClick={() => {
                    copy("artigaund2210@gmail.com");
                    setCopied(true);
                }}
                className="focus:outline-none"
            >
                <span className="mr-3 text-gray-300">artigaund2210@gmail.com</span>
                {copied ? (
                    <FiCheck className="inline cursor-pointer text-green-400" />
                ) : (
                    <FiCopy className="inline cursor-pointer" />
                )}
            </button>
        </div>
    );
}