
function Login() {


    return (
        <div>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 text-center">
                        Please sign in to your account
                    </p>

                    <form className="mt-6">
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full h-10 outline-none px-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 h-10 outline-none px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember"
                                    className="ml-2 text-sm text-gray-600"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 focus:outline-none  focus:ring-indigo-400 focus:ring-offset-2"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        <a
                            href="#"
                            className="font-medium text-indigo-600 hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
