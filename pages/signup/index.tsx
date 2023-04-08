import Layout from "@/components/layout/layout";

export default function Login() {
  return (
    <Layout>
      <form className="form-login mt-4 pt-4">
        <h1 className="h3 mb-3 fw-normal">Please log in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput mt-5">Email address</label>
        </div>
        <div className="form-floating mt-3 ">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3 mt-4">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </Layout>
  );
}
