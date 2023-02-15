import { memo, useState } from 'react';

interface InputFieldProps {
    static?: boolean;
    label: string;
    type: string;
    value: string;
    placeholder?: string;
    isRequired: boolean;
    disabled?: boolean;
    error?: boolean;
    text?: string;
    name?: string;
    blurred?: boolean;
    errorText?: string;
    onChangeHandler: (value: string) => void;
}

const InputField = (
    props: InputFieldProps & Pick<JSX.IntrinsicElements['input'], 'autoComplete' | 'id'>
) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    if (props.static === true) {
        return (
            <div>
                <p>{props.label}</p>
                {props.text && <p>{props.text}</p>}
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className=""
                    name={props.name}
                    readOnly
                    autoComplete={props.autoComplete}
                    id={props.id}
                />
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <p>{props.label}</p>
                </div>
                <div>
                    <input
                        onChange={(e) => props.onChangeHandler(e.target.value)}
                        type={passwordVisible === false ? props.type : 'text'}
                        placeholder={props.placeholder}
                        value={props.value}
                        required={props.isRequired}
                        className={`${props.blurred ? '' : ''}${props.error ? '' : ''}`}
                        name={props.name}
                        spellCheck="false"
                        autoComplete={props.autoComplete}
                        id={props.id}
                    />
                    {props.label?.includes('Password') && (
                        <button
                            type="button"
                            onClick={() => {
                                setPasswordVisible(!passwordVisible);
                            }}
                            className=""
                        >
                            {passwordVisible ? <p>Icon open eye</p> : <p>Icon close eye</p>}
                        </button>
                    )}
                    {props.blurred && (
                        <div>
                            <p>aaa</p>
                            {props.value
                                .split('')
                                .slice(0, 54)
                                .map(() => (
                                    <p>Icon circle</p>
                                ))}
                        </div>
                    )}
                </div>
                {props.error && <p>{props.errorText}</p>}
            </div>
        );
    }
};

export default memo(InputField);
