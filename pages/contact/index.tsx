import Layout from "@/components/layout/layout";
import Link from "next/link";
export default function Contact() {
  return (
    <Layout>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center mt-5">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-4">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within Link matter of hours
          to help you.
        </p>

        <div className="row">
          <div className="col-md-9">
            <form>
              <div className="form-group mt-4">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Alejandro"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="emailAddress">Your email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="alejandro@gmail.com"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Classes"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="message">Your message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={3}
                ></textarea>
              </div>
            </form>
            <div className="text-center text-md-left mt-4">
              <Link className="btn btn-primary" href="#">
                Send
              </Link>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas">&#xf3c5;</i>
                <p>Miami, USA</p>
              </li>

              <li>
                <i className="fas">&#xf095;</i>
                <p>305-397-5349</p>
              </li>

              <li>
                <i className="fas">&#xf0e0;</i>
                <p>ralph.barrero@inglesmiami.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
