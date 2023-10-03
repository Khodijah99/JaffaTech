import React from "react";

function ContactSection() {
  return (
    <div>
      {/* <!--Contact Details Start--> */}
      <section className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="contact-details__img">
                <img src="assets/images/resources/contact1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      Contact with us
                    </span>
                    <div className="section-title-shape">
                      <img
                        src="assets/images/shapes/section-title-shape.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="section-title__title">Get in touch with us</h2>
                </div>
                <p className="contact-details__text">
                  We're here to help! Contact us today to speak with a member of
                  our knowledgeable and friendly team. Whether you have a
                  question, need technical support, or simply want to learn more
                  about our products and services, we're always happy to hear
                  from you.
                </p>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="icon-telephone"></span>
                    </div>
                    <div className="text">
                      <p>Have any question?</p>
                      <a href="tel:980009850">
                        <span>Call</span> +234 &nbsp; 8087717597
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-email"></span>
                    </div>
                    <div className="text">
                      <p>Send your mail for general enquiries.</p>
                      <a href="mailto:needhelp@notech.com">
                        info "at" jaffatech.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p>Visit anytime</p>
                      <span>
                        No 9, Gindiri Street, Garki II Abuja, Nigeria.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Contact Details End--> */}

      {/* <!--Contact Page Start--> */}
      <section className="contact-page">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Send us email</span>
              <div className="section-title-shape">
                <img
                  src="assets/images/shapes/section-title-shape.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="section-title__title">Feel free to write</h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-page__form">
                <form
                  action="assets/inc/sendemail.php"
                  className="comment-one__form contact-form-validated"
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Phone number"
                          name="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="comment-form__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Write comment"
                        ></textarea>
                      </div>
                      <div className="comment-form__btn-box">
                        <button
                          type="submit"
                          className="thm-btn comment-form__btn"
                        >
                          Send a message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Contact Page End--> */}
    </div>
  );
}
export default ContactSection;
