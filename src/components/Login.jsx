
const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <div className="mb-10">
            <p className="text-4xl font-bold text-blue-500">Login</p>
        </div>
        <div className="text-2xl">
            <form action="">
                <label className="text-blue-500 font-semibold">Email</label><br />
                <input type="text" className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"/><br />
                <label className="text-blue-500 font-semibold">Password</label><br />
                <input type="text" className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"/><br/ >
                <div className="flex justify-center mt-17">
                    <button className="w-80 h-11 rounded-lg bg-blue-500 text-center text-white">Login</button>
                </div>
            </form>
        </div>
        <div className="flex mt-4">
            <p className="mr-1">Don't have an account?</p>
            <p className="text-blue-500 underline">SignUp</p>
        </div>
    </div>
  )
}

export default Login