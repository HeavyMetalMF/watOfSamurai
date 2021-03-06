import c from './FormsControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const error = meta.touched && meta.error;
    return(
        <div className={c.formControl + " " + (error ? c.error : '')}>
            {props.children}
            <div>
                {error ? <span>{meta.error}</span> : ''}
            </div>
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl{...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}