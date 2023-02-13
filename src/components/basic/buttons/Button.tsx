import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";

const classNames = require("classnames");

type ButtonProps = {
    text?: string;
    onButtonPressed: () => void;
    loading?: boolean;
    color?: string;
    size: string;
    icon?: IconProp;
    active?: boolean;
    iconDisabled?: IconProp;
    textDisabled?: string;
    type?: ButtonHTMLAttributes<any>['type'];
};

export default function Button(props: ButtonProps): JSX.Element {
    const activityStatus =
        props.active || (props.text != "" && props.textDisabled == undefined);

    const styleButton = classNames(
        "group m-auto md:m-0 inline-block rounded-md duration-200",

        props.color == "mineshaft" &&
        activityStatus &&
        "bg-mineshaft-700 hover:bg-primary",
        props.color == "mineshaft" && !activityStatus && "bg-mineshaft",
        (props.color == "primary" || !props.color) &&
        activityStatus &&
        "bg-primary hover:opacity-80",
        (props.color == "primary" || !props.color) &&
        !activityStatus &&
        "bg-primary",
        props.color == "red" && "bg-red",

        activityStatus ? "opacity-100 cursor-pointer" : "opacity-40",

        props.size == "md" && "h-10 w-full px-2 md:px-4",
        props.size == "lg" && "h-12 w-full px-2 md:px-8",
        !props.size && "md:py-1 px-3 md:px-8",
        props.size == "icon-md" && "h-10 w-10 flex items-center justify-center",
        props.size == "icon-sm" && "h-9 w-9 flex items-center justify-center"
    );

    const styleMainDiv = classNames(
        "relative font-medium flex items-center",

        props.color == "mineshaft" && "text-gray-400",
        props.color != "mineshaft" && props.color != "red" && props.color != "none" && "text-black",
        props.color == "red" && "text-gray-200",
        props.color == "none" && "text-gray-200 text-xl",
        activityStatus && props.color != "red" && props.color != "none" ? "group-hover:text-black" : "",

        props.size == "icon" && "flex items-center justify-center"
    );

    const textStyle = classNames(
        "relative duration-200 text-center w-full",

        props.loading ? "opacity-0" : "opacity-100",
        props.size == "md" && "text-sm",
        props.size == "lg" && "text-lg"
    );

    const button = (
        <button
            disabled={!activityStatus}
            type={props.type}
            onClick={props.onButtonPressed}
            className={styleButton}
        >
            <div className={styleMainDiv}>
                <div
                    className={`${props.loading == true ? "opacity-100" : "opacity-0"
                        } absolute flex items-center px-2 duration-200`}
                >
                 //TODO Loading gif image
                </div>
                {props.icon && (
                    <FontAwesomeIcon
                        icon={props.icon}
                        className={`flex my-auto font-extrabold ${props.size == "icon-sm" ? "text-sm" : "text-sm"
                            } ${(props.text || props.textDisabled) && "mr-2"}`}
                    />
                )}
                {props.iconDisabled && (
                    //TODO Icon disabled button
                    <FontAwesomeIcon
                        icon={props.iconDisabled as IconProp}
                        className={`flex my-auto font-extrabold ${props.size == "icon-sm" ? "text-sm" : "text-md"
                            } ${(props.text || props.textDisabled) && "mr-2"}`}
                    />
                )}
                {(props.text || props.textDisabled) && (
                    <p className={textStyle}>
                        {activityStatus ? props.text : props.textDisabled}
                    </p>
                )}
            </div>
        </button>
    );

    return button;
}
