import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import InputField from "@/components/basic/InputField";
import Error from "@/components/basic/Error";
import Button from "@/components/basic/buttons/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //TODO Redirect to dashboard

    //TODO function to check login is true

    return (
        <div className="h-screen w-screen max-h-screen max-w-screen flex flex-col justify-start px-6">
            <div className="z-10 relative top-5">
                <Image src="/../public/Vector.png" height={45} width={160} alt="long logo" />
            </div>
            <div className="h-screen flex justify-center">
                <Image src="/../public/background.png" fill alt="plano de fundo" />
                <div className="flex items-center top-80 right-80 relative">
                    <p className="z-10 text-6xl mb-1 mt-1 text-white font-semibold drop-shadow-lg">Encontre aqui <p className="font-extrabold font-poppins">o seu pet</p></p>
                </div>
            </div>
            <div className="z-10 flex justify-end relative bottom-48 right-20">
                <div className="bg-white rounded-2xl w-[400px] h-[600px]">
                    <form
                        onChange={() => setErrorLogin(false)}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="">
                            <p className="">
                                Login
                            </p>
                            <div className="flex items-center justify-center w-full md:p-2 rounded-lg mt-4 md:mt-0 max-h-24 md:max-h-28 bg-primary-300">
                                <InputField
                                    label="Email"
                                    onChangeHandler={setEmail}
                                    type="email"
                                    value={email}
                                    placeholder=""
                                    isRequired
                                    autoComplete="username"
                                />
                            </div>
                            <div className="relative flex items-center justify-center w-full md:p-2 rounded-lg md:mt-2 mt-6 max-h-24 md:max-h-28 bg-primary-300">
                                <InputField
                                    label="Senha"
                                    onChangeHandler={setPassword}
                                    type="password"
                                    value={password}
                                    placeholder=""
                                    isRequired
                                    autoComplete="current-password"
                                    id="current-password"
                                />
                                <div className="absolute top-2 right-3 text-primary-700 hover:text-primary duration-200 cursor-pointer text-sm">
                                    <Link href="/verify-email">Esqueceu sua senha?</Link>
                                </div>
                            </div>
                            {!isLoading && errorLogin && (
                                <Error text="Your email and/or password are wrong." />
                            )}
                            <div className="flex flex-col items-center justify-center w-full md:p-2 max-h-20 max-w-md mt-4 mx-auto text-sm bg-primary-300">
                                <div className="text-l mt-6 m-8 px-8 py-3 text-lg">
                                    <Button
                                        type="submit"
                                        text="Entrar"
                                        onButtonPressed={() => setIsLoading}
                                        loading={isLoading}
                                        size="lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center md:pb-4 mt-4">
                            <p className="text-sm flex justify-center text-gray-400 w-max">
                                Precisa de uma conta?
                            </p>
                            <Link href="/signup">
                                <button className="text-primary-700 hover:text-primary duration-200 font-normal text-sm underline-offset-4 ml-1.5">
                                    Crie uma conta
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}