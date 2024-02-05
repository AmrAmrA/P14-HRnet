import { useForm } from 'react-hook-form';

const FormPage = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data)};

  return (
    <form className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
    <h1 className="text-white font-bold text-lg text-center">HRnet</h1>

   
        <label className="text-white mt-4"  htmlFor="Firstname">First Name</label>
        <input placeholder="Your Firstname" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required {...register('Firstname')}
          // pattern : {
          //   value : /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$./,  
          //   message : 'Please please type a first name with the format required'
          // }
        />
 

        <label className="text-white mt-4" htmlFor="Lastname">Last Name</label>
        <input placeholder="Your Lastname" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"  type="text" required {...register('Lastname')}/>

        <label className="text-white mt-4" htmlFor="BirthDay">Date of Birth</label>
        <input placeholder="" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"  type="date" required {...register('BirthDay')}/>
        
        <label className="text-white mt-4" htmlFor="StartDay">Date of start</label>
        <input placeholder="" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="date" required {...register('startDay')} />

      
    <fieldset className ="address mt-20">
    <legend className='text-white'> Address </legend>
    <div className="mt-4">
        <label className="text-white" htmlFor="address">Street</label>
        <input placeholder="Your address" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="address" required {...register('address')}></input>
    </div>

    <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
            <label className="text-white" htmlFor="city">City</label>
            <input placeholder="Your city" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="city" type="text" required/>
        </div>

        <div className="flex-1">
            <label className="text-white" htmlFor="state">State</label>
            <input placeholder="Your state" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="state" type="text" required {...register('state')}/>
        </div>
    </div>

   
        <div className="mt-7 flex flex-row">
            <label className="text-white text-center py-1" htmlFor="zip">ZIP</label>
            <input placeholder="Your ZIP code" className="w-3/6 bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1 mx-3" id="zip" type="number" required {...register('ZIP')}/>
            <label className="text-white text-center py-1" htmlFor="zip">ZIP</label>
            <input placeholder="Your ZIP code" className="w-3/6 bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1 mx-3" id="zip" type="number" required {...register('ZIP')}/>
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
