import './form-input.styles.scss'

const FormInput = ({label,handleChange, ...props}) =>(

    <div className='group'>
    <input className='form-input' onChange={handleChange} {...props} required/>
    {label ? <label className={`${props.value.length ? 'shrink': ''} form-input-label`}>{label}</label>: null}
    </div>
    


)


export default FormInput