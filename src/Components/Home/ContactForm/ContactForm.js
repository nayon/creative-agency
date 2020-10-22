import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section style={{ height: '710px', backgroundColor: '#FBD062', marginTop: '150px' }}>
            <div className="container pt-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-5">
                            <h1 style={{ fontWeight: '700', color: '#2D2D2D' }}>Let us handle your<br />  project, professionally.</h1>
                            <p style={{ color: '#63583C', marginTop: '32px' }}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form style={{ marginTop: '52px' }} action="">
                            <div className="form-group">
                                <input type="text" className="form-control p-4" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control p-4" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control p-4" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn-brand"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{marginTop: '90px'}} className="text-p text-center">copyright Orange labs {new Date().getFullYear()}</div>
            </div>
        </section>
    );
};

export default ContactForm;