import googleLogo from "../assets/logo-google.png";
import { BiLogIn } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

  const schema = z.object({
    login: z.string()
    .nonempty('Digite seu login.')
    .min(5,{ message: 'Mínimo de 5 caracteres.'}),
    password: z.string()
    .nonempty('Digite sua senha.')
    .min(5, {message: 'Mínimo de 5 caracteres.'})
  })

type inputs = z.infer<typeof schema>

export const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<inputs>({
        resolver: zodResolver(schema)
    });

    function formUser(data: any) {
        console.log(data)
    }

    return (
        <div className="w-96 h-4/6 bg-white bg-opacity-80 rounded-lg flex flex-col justify-start items-center max-[450px]:w-[340px] max-[400px]:w-[300px]">
            <img className="w-40 mb-4" src={googleLogo} alt="Logo Google" />
            <form onSubmit={handleSubmit(formUser)} className="flex flex-col justify-center items-center gap-3">
                <div className="h-16 text-center">
                    <div className="flex justify-center items-center gap-2">
                        <BiLogIn className="w-5 h-5 text-gray-800 max-[400px]:w-4 max-[400px]:h-4" />
                        <label className="text-md max-[400px]:text-sm" htmlFor="login">Login:</label>
                        <input className="w-52 border border-gray-500 rounded-md p-1 outline-none max-[400px]:w-44" type="text" id="login" autoComplete="off" autoFocus {...register("login")}/>
                    </div>
                    {errors?.login?.message && <span className="text-red-500 text-sm mb-6 max-[425px]:text-center ml-20">{errors?.login.message}</span>}
                </div>
                <div className="h-16 text-center">
                    <div className="flex justify-center items-center gap-2">
                        <RiLockPasswordFill className="w-5 h-5 text-gray-800 max-[400px]:w-4 max-[400px]:h-4" />
                        <label className="text-md max-[400px]:text-sm" htmlFor="password">Password:</label>
                        <input className="border border-gray-500 rounded-md p-1 outline-none max-[400px]:w-44" type="password" id="password" autoComplete="off" {...register("password")}/>
                    </div>
                    {errors?.password?.message && <span className="text-red-500 text-sm max-[425px]:text-center ml-20">{errors?.password.message}</span>}
                </div>
                <button className="w-48 mt-8 bg-gray-300 border border-gray-800 py-2 px-4 rounded-md font-bold text-lg text-gray-800 hover:bg-gray-400" type="submit">Enter</button>
            </form>
        </div>
    )
}