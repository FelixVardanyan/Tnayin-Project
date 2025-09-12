import { useForm } from "react-hook-form";
import { RegisterData } from "../../datas/data";
import Input from "../../components/Input/Input";

export default function Register() {
    const { handleSubmit, control } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="bg-violet-600 pt-36 h-214">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                {RegisterData.map((e, i) => (
                    <Input type={e.type} placeholder={e.placeholder} key={e.id} name={e.name} control={control} />
                ))}
                <input type="submit" value="Submit" className="p-[10px] mt-5 w-[55%] text-2xl bg-rose-950 rounded-lg text-white font-bold"/>
            </form>
        </div>
    )
}