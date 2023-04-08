export default function Services() {
  return (
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center"  id="services">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Basic</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $10<small className="text-muted fw-light">/hour</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>English or Spanish level evaluation</li>
              <li>VIP 1-1 lessons</li>
              <li>Small groups 5-8 people</li>
              <li>Translation-Interpretation</li>
              <li>Subtitle services</li>
              <li>In-person or online</li>
              <li>OEFL or TOEIC exam preparation</li>
              <li>Academic evaluation of your foreign degree</li>
              <li>Live and study in Miami</li>
            </ul>
            <button
              type="button"
              className="w-100 btn btn-lg btn-outline-primary"
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $20<small className="text-muted fw-light">/hour</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>English or Spanish level evaluation</li>
              <li>VIP 1-1 lessons</li>
              <li>Small groups 5-8 people</li>
              <li>Translation-Interpretation</li>
              <li>Subtitle services</li>
              <li>In-person or online</li>
              <li>OEFL or TOEIC exam preparation</li>
              <li>Academic evaluation of your foreign degree</li>
              <li>Live and study in Miami</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-white bg-primary border-primary">
            <h4 className="my-0 fw-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $30<small className="text-muted fw-light">/hour</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>English or Spanish level evaluation</li>
              <li>VIP 1-1 lessons</li>
              <li>Small groups 5-8 people</li>
              <li>Translation-Interpretation</li>
              <li>Subtitle services</li>
              <li>In-person or online</li>
              <li>OEFL or TOEIC exam preparation</li>
              <li>Academic evaluation of your foreign degree</li>
              <li>Live and study in Miami</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
