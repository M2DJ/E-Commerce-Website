
const SignUp = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-3">
        <div>
            <h1 className="text-4xl font-bold text-blue-500">Sign-up</h1>
        </div>
        <div>
            <form action="">
                <label className="text-blue-500 font-semibold">Email</label><br />
                <input type="text" className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"/><br />
            </form>
        </div>
    </div>
  )
}

export default SignUp