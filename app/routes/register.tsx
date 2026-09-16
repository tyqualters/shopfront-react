import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <main className="w-full max-w-xs m-auto min-h-screen flex flex-col justify-center items-center p-4">
        <form
          action="/api/register"
          method="POST"
          className="w-full flex flex-col gap-3"
        >
          <h1 className="text-2xl font-normal text-center mb-2">
            Create an account
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
              type="email"
              name="email"
              placeholder="Email address"
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

          <button type="submit" className="btn btn-primary w-full mt-2">
            Create account
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

export default Register;
