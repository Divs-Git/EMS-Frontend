import { FaUserTie } from 'react-icons/fa';

const Login = () => {
  return (
    <div className='flex flex-col items-center mt-[120px] h-screen bg-gradient-to-b from-gray-50 to-gray-200 space-y-6'>
      <span>
        <FaUserTie size={34} />
      </span>
      <h2 className='text-xl lg:text-3xl font-light uppercase tracking-widest text-gray-900'>
        Employee Management System
      </h2>
      <div className='bg-white border border-gray-300 shadow-xl rounded-2xl p-8 w-74 lg:w-96'>
        <h2 className='text-lg lg:text-2xl font-semibold mb-4  uppercase tracking-widest text-gray-900 text-center'>
          Login
        </h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-900 mb-2'>
              Email
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              className='w-full px-3 py-2 border rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-900 mb-2'>
              Password
            </label>
            <input
              type='password'
              placeholder='********'
              className='w-full px-3 py-2 border rounded-md'
            />
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
              <input type='checkbox' className='form-checkbox' />
              <span className='ml-2 text-gray-900'>Remember Me</span>
            </label>
            <a href='#' className='text-gray-900 hover:underline'>
              Forgot Password?
            </a>
          </div>
          <button
            type='submit'
            className='w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 cursor-pointer'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
