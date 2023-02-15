import React from "react";

export default function Error({ text }: { text: string }): JSX.Element {
    return (
        <div className="">
            {text && (
                <p className="text-white">{text}</p>
            )}
        </div>
    );
}
