import {
    NewInput
} from './Input.e'


 const MyInput = (
  {  label ,
    placeholder , 
    id,
    register,
    required,
    type,
    classN,
    value,
    onChange,
    hidden,
    name,
    max,
    disabled ,
    onBlur
}
) =>{

    return (
        <>
            <NewInput id={id}>
             {label ? <p>{label}</p> : null}   
                <input disabled={disabled} onBlur={onBlur} onInput={onChange} max={max} name= {name} className={classN} id={id} {...register(id , {required })} type={type} value={value} placeholder={placeholder}  hidden = {hidden}  />
            </NewInput>
        </>
    )
}
export default MyInput
