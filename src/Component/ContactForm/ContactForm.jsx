import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";
import Header from "../Header/Header";

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const navigate = useNavigate()
  return (
    <>
        <Header/>
        <div className="Contact-Wrapper">
        <h1>CONTACT FORM</h1>
        <div className="Form-Wrapper">
            
        <form onSubmit={handleSubmit(onSubmit)}> 
        <input type="text" {...register("example",{ required: true })} placeholder="Name" />
        {errors.exampleRequired && <span>This field is required</span>}    
        <input type="phone" {...register("exampleRequired", { required: true })}  placeholder="phone"/>
      {errors.exampleRequired && <span>This field is required</span>}     
      <input type="email" {...register("example",{ required: true })} placeholder="Email" />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="password" {...register("exampleRequired", { required: true })}  placeholder="Password"/>
      {errors.exampleRequired && <span>This field is required</span>}
      
      <br />
      <input type="submit" onClick={()=>navigate('/')} />
    </form>
    </div>
    </div>
    </>
    
  );
}

export default ContactForm;
