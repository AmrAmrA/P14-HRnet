import { useForm } from 'react-hook-form';

const FormPage = () => {
  const { register, handleSubmit,formState: {errors}, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data)
  };

    

  return (
    <form className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
    <h1 className="text-white font-bold text-lg text-center">HRnet</h1>

    
        <label className="text-white mt-4"  htmlFor='firstname'>First Name</label>
        <input placeholder="Your Firstname" id="firstname" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" name='firstName' {...register('firstname', {
          required : 'First Name is required', 
          minLength: {
            value : 2, 
            message : "First Name should be at-least 2 characters"
          }, 
          pattern : {
            value : /^(?=.{1,40}$)[a-zA-Zéàèîïñ]+(?:[-'\s][a-zA-Zéàèîïñ]+)*$/, 
            message : 'First Name is required with correct form', 
          }
        })}
        /> 
        {errors.firstname && <p className='errorFistName text-white'>{errors.firstname.message}</p>}
     

        <label className="text-white mt-4" htmlFor="Lastname">Last Name</label>
        <input placeholder="Your Lastname" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"  type="text" name='lastName'{...register('lastName', {
          required : 'Last Name is required', 
          minLength: {
            value : 2, 
            message : "Last Name should be at-least 2 characters"
          }, 
          pattern: {
                   value :  /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/, 
                   message: 'Last Name is not valid'
          }, 
        })}/>
         {errors.lastName && (<p className='errorlastName text-white'>{errors.lastName.message}</p>)}

        <label className="text-white mt-4" htmlFor="BirthDay">Date of Birth</label>
        <input placeholder="" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"  type="date" name='birthDay' max={'1995/12/31'} min={'1900-01-01'}{...register('BirthDay', {
          required: 'Birth day is required',
          message : 'Birth day is required' 
        })}/>
        {errors.birthDay && (<p className='errorbirthDay'>{errors.birthDay.message}</p>)}
        
        <label className="text-white mt-4" htmlFor="startDay">Date of start</label>
        <input placeholder="" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" max={'1995-12-31'} min={'1900-01-01'} type="date" name='startDay'   {...register('startDay',
        {
          required: 'Start Day is required',
          message : 'Start Day is required' 
        }
        )} />
        {errors.startDay && (<p className='startDayError'>{errors.startDay.message}</p>)}
      
    <fieldset className ="address mt-20">
    <legend className='text-white'> Address </legend>
    <div className="mt-4">
        <label className="text-white" htmlFor="address">Street</label>
        <input placeholder="Your address" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="address" name= 'address'  {...register('address', {
          required : 'address is required',
          pattern: {
                  value   : '/d{1,}(s{1}w{1,})(s{1}?w{1,})+)/g', 
                  message : 'Address is required'
          },
        })} />
    </div>
    {errors.address && (<p className='errorAddress'>{errors.address.message}</p>)}

    <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
            <label className="text-white" htmlFor="city">City</label>
            <input placeholder="Your city" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="city" type="text" name='city'{...register('city', {
              required : 'City is required', 
              pattern  : {
                value :  /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/, 
                message: 'City is required'
              }, 
            })} />
             {errors.city && (<p className='startDayError'>{errors.city.message}</p>)}
        </div>

        <div className="flex-1">
            <label className="text-white" htmlFor="state">State</label>
            <input placeholder="Your state" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="state" type="text" {...register('state', {
              required : 'state is required', 
              pattern: {
                value : '/d{1,}(s{1}w{1,})(s{1}?w{1,})+)/g', 
                message : 'State is required'
              }
            })}/>
        </div>
    </div>

   
        <div className="mt-7 flex flex-col">
            <label className="text-white" htmlFor="zip">ZIP</label>
            <input placeholder="Your ZIP code" className="w-3/6 bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="zip" type="number"  {...register('ZIP', {
              required : true, 
            })}/>
        </div>
 
    </fieldset>

    <label htmlFor="department" className='text-white mt-5 mb-1'>Departement</label>
    <select name="department" id="department" className='w-2/6 '>
      <option>Sales</option>
      <option>Marketing</option>
      <option>Engineering</option>
      <option>Human Resources</option>
      <option>Legal</option>
    </select>
    <div className="mt-4 flex justify-end">
        <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200" type="submit" required>Save</button>
    </div>
</form>
  )
};

export default FormPage;
