import { useForm } from 'react-hook-form';

const FormPage = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm(
    {
        defaultValues : {
            firstName : 'FirstName', 
            lastName  : 'Lastname'
        }
    }
  );

  const onSubmit = data => {
    console.log(data);
    // Here data processing 
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='firstName'>Firstname</label>
      <input htmlFor ='firstName'  type='text' defaultValue={"Enter your Firstname"} {...register("example")} />
      <label htmlFor='LastName'>Lastname</label>
      <input  htmlFor ='LastName'  type='text' defaultValue={"Enter your Lastname"} {...register("LastName")} />
      <label htmlFor='birthDay'>BirthDay</label>
      <input htmlFor ='birthDay' type='date'></input>
      <label htmlFor='startDate'>Start Date</label>
      <input htmlFor ='startDate' type='date'></input>

      <input className='mt-20' type="submit" />
    </form>
  )
};

export default FormPage;
