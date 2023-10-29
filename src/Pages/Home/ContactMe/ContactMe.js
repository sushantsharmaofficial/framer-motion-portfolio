import React from "react";

const ContactMe = () => {
  return (
    <div>
      <div className="hero bg-base-100 h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Contact Me</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write Your Message here!"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
