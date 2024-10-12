import { FieldErrors, Path } from "react-hook-form";

interface FormInputProp<T> {
    id: string;
    label: string;
    name: Path<T>;
    errors: FieldErrors;
    register: object;
}

export const FormInput = <T,>({ id, label, name, errors, register }: FormInputProp<T>) => {
    return (
        <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-white" htmlFor={id}>{label}</label>
            <input className="border-gray-300 text-sm rounded-lg block p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" id={id} {...register} />
            <p className="text-xs text-red-400 mt-2">{errors[name]?.message as string}</p>
        </div>
    );
};
