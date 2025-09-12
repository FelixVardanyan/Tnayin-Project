import { useController } from "react-hook-form"

const Input = ({ control, placeholder, name, type }) => {
    const { field } = useController({
        name,
        control
    })
    return (
        <input className="md:w-[55%] h-12 mt-5 pl-[10px] outline-none rounded-md w-[80%] bg-white" type={type}
            placeholder={placeholder}
            name={name}
            value={undefined}
            {...field}
            required={true} />
    )
}

export default Input