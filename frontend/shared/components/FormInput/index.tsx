export const errorText = (error: string): JSX.Element => {
  return <span className="sign-up__field--error ">{error}</span>
}

export interface FormInputProps {
  name: string
  register: any
  required: boolean
  errors: any
  type?: string
}

export const FormInput = ({
  name,
  register,
  required,
  errors,
  type,
}: FormInputProps) => {
  return (
    <>
      <input
        id={`${name}`}
        {...register(`${name}`, {
          required: required ? `${name} required` : false,
        })}
        type={type ?? 'text'}
      />
      {errors[`${name}`] && (
        <>{errorText(errors[`${name}`].message?.toString())}</>
      )}
    </>
  )
}
