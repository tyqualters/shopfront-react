import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <main className="w-full max-w-xs m-auto min-h-screen flex flex-col justify-center items-center p-4">
        <form
          action="/api/login"
          method="POST"
          className="w-full flex flex-col gap-3"
        >
          <h1 className="text-2xl font-normal text-center mb-2">
            Please sign in
          </h1>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="grow"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="grow"
              required
            />
          </label>

          <div className="form-control my-1">
            <label className="label cursor-pointer justify-start gap-3 p-0">
              <input
                type="checkbox"
                name="remember-me"
                className="checkbox checkbox-primary checkbox-sm"
              />
              <span className="label-text">Remember me</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="link link-hover text-primary text-sm">
            Go Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Login;
