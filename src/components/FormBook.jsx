import { useState } from "react"
import { toast } from 'react-toastify';


export default function FormBook(props){
    const [values, setValues] = useState({
        name:"",
        email:"",
        tel:"",
        city:"",
        textarea:""
    })

    const [errors, setErrors] = useState({
        name:{
            isValid: true,
            message:""
        },
        email:{
            isValid: true,
            message:""
        },
        tel:{
            isValid: true,
            message:""
        },
        city:{
            isValid: true,
            message:""
        }
    })

    const changeHandler = (target) => {
        setValues({...values, [target.name]: target.value})
    }

    function isValidEmail(email) {
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    const focusHandler = (target) => {
        if(!errors.isValid){
            setErrors({...errors, [target.name]: {isValid: true, message:""}})

        }
      }

    const submitForm = (e) => {
        e.preventDefault()

        let FormValid = true
        if(values.name === ''){
            setErrors({...errors, 'name': {isValid: false, message:"Enter your name"}})
            FormValid = false
            return
        } else {
            setErrors({...errors, 'name': {isValid: true, message:""}})
        }

        if(values.email === ''){
            setErrors({...errors, 'email': {isValid: false, message:"Enter your email"}})
            FormValid = false
            return
        }

        if(!isValidEmail(values.email)){
            setErrors({...errors, 'email': {isValid: false, message:"Invalid email"}})
            FormValid = false
            return
        } else{
            setErrors({...errors, 'email': {isValid: true, message:""}})
        }

        if(values.tel === ''){
            setErrors({...errors, 'tel': {isValid: false, message:"Enter phone"}})
            FormValid = false 
            return
        } else{
            setErrors({...errors, 'tel': {isValid: true, message:""}})
        }

        if(isNaN(values.tel)){
            setErrors({...errors, 'tel': {isValid: false, message:"Incorrect content"}})
            FormValid = false 
            return
        } else{
            setErrors({...errors, 'tel': {isValid: true, message:""}})
        }

        if(values.city === ''){
            setErrors({...errors, 'city': {isValid: false, message:"Enter your city"}})
            FormValid = false
            return
        } else {
            setErrors({...errors, 'city': {isValid: true, message:""}})
        }

        if(FormValid){
            const message = `
            <b>Name: </b>${values.name}\r\n<b>Email: </b>${values.email}\r\n<b>Phone: </b>${values.tel}\r\n<b>City: </b>${values.city}\r\n<b>Message: </b>${values.textarea}`;
            const url = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;
            fetch(url,{
                method: 'post'
            })
                .then(resp=>resp.json())
                .then(resp=>{
                    if(resp.ok){
                        setValues({
                            name:"",
                            email:"",
                            tel:"",
                            city:"",
                            textarea:""
                        })
                        toast.success('Your message successfully sent.')
                    } else{
                        toast.error("Some error occured.")
                    }
                })
        }
        
    }

    return (
        <form onSubmit={submitForm} className={props.className ? `form-contacts ${props.className}`: 'form-contacts'}>
            <div className="wrap-input">
                <div className="wrap-elem">
                    <div className="flr-err">{errors.name.message}</div>
                    <input className={`elem ${!errors.name.isValid ? 'red' : ''}`}  type="text" placeholder="Your name*"  name="name" value={values.name} onFocus={(e)=>focusHandler(e.target)} onChange={(e)=>changeHandler(e.target)}/>
                </div>
                <div className="wrap-elem">
                    <div className="flr-err">{errors.email.message}</div>
                    <input className={`elem ${!errors.email.isValid ? 'red' : ''}`} type="email" placeholder="Email*"  name="email" value={values.email} onFocus={(e)=>focusHandler(e.target)} onChange={(e)=>changeHandler(e.target)}/>
                </div>
                <div className="wrap-elem">
                    <div className="flr-err">{errors.tel.message}</div>
                    <input className={`elem ${!errors.tel.isValid ? 'red' : ''}`} type="tel" placeholder="Phone Number*" name="tel" value={values.tel} onFocus={(e)=>focusHandler(e.target)} onChange={(e)=>changeHandler(e.target)}/>
                </div>
                <div className="wrap-elem">
                    <div className="flr-err">{errors.city.message}</div>
                    <input className={`elem ${!errors.city.isValid ? 'red' : ''}`} type="text" placeholder="City*" name="city" value={values.city} onFocus={(e)=>focusHandler(e.target)} onChange={(e)=>changeHandler(e.target)}/>
                </div>
            </div>
            <div className={props.classNameElemForm ? `form-elem ${props.classNameElemForm}` : 'form-elem'}>
                <div className="wrap-elem">
                    <textarea className={props.classNameText ? `elem textarea ${props.classNameText}` : 'elem textarea'} name="textarea" id="" cols="30" rows="10" placeholder="Your Message*"  value={values.textarea} onChange={(e)=>changeHandler(e.target)}></textarea>                
                </div>
            </div>
            <div className="button">
                <button type="submit" className="btn light">Submit Message</button>
            </div>
        </form>
    )
}