import googleLogo from "../assets/logo-google.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { BiLogIn } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRef } from "react";

type Inputs = {
    login: string,
    password: string,
  };

export const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <div className="w-96 h-4/6 bg-white bg-opacity-80 rounded-lg flex flex-col justify-start items-center max-[450px]:w-[340px] max-[400px]:w-[300px]">
            <img className="w-40 mb-4" src={googleLogo} alt="Logo Google" />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                <div className="h-16 text-center">
                    <div className="flex justify-center items-center gap-2">
                        <BiLogIn className="w-5 h-5 text-gray-800 max-[400px]:w-4 max-[400px]:h-4" />
                        <label className="text-md max-[400px]:text-sm" htmlFor="login">Login:</label>
                        <input className="w-52 border border-gray-500 rounded-md p-1 outline-none max-[400px]:w-44" type="text" id="login" autoComplete="off" autoFocus {...register("login", {required: true, minLength: 3})}/>
                    </div>
                    {errors?.login?.type === 'required' && <span className="text-red-500 text-sm mb-6">Digite seu login.</span>}
                    {errors?.login?.type === 'minLength' && <span className="text-red-500 text-sm mb-6">Seu login precisa ter no mínimo 3 caracteres.</span>}
                </div>
                <div className="h-16 text-center">
                    <div className="flex justify-center items-center gap-2">
                        <RiLockPasswordFill className="w-5 h-5 text-gray-800 max-[400px]:w-4 max-[400px]:h-4" />
                        <label className="text-md max-[400px]:text-sm" htmlFor="password">Password:</label>
                        <input className="border border-gray-500 rounded-md p-1 outline-none max-[400px]:w-44" type="password" id="password" autoComplete="off" {...register("password", {required: true, minLength: 6})}/>
                    </div>
                    {errors?.password?.type === 'required' && <span className="text-red-500 text-sm">Digite sua senha.</span>}
                    {errors?.password?.type === 'minLength' && <span className="text-red-500 text-sm">Sua senha precisa ter no mínimo 6 caracteres.</span>}
                </div>
                <button className="w-48 mt-8 bg-gray-300 border border-gray-800 py-2 px-4 rounded-md font-bold text-lg text-gray-800 hover:bg-gray-400" type="submit">Enter</button>
            </form>
        </div>
    )
}