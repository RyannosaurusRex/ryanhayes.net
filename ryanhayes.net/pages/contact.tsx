
import * as React from 'react';

const Contact: React.FunctionComponent = () => {
return <>
<div className="relative bg-white">
  <div className="lg:absolute lg:inset-0">
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img className="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="" />
    </div>
  </div>
  <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
    <div className="lg:pr-8">
      <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
          Let's work together
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
          I'd love to hear from you! Send us a message using the form or just send me an email.
        </p>
        <form action="#" method="POST" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className="mt-9 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="block text-sm font-medium leading-5 text-gray-700">Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="name" className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium leading-5 text-gray-700">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="email" type="email" name="email" className="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label className="block text-sm font-medium leading-5 text-gray-700">How can I help you?</label>
              <span className="text-sm leading-5 text-gray-500">Max. 500 characters</span>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea id="how_can_we_help" name="message" rows={4} className="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"></textarea>
            </div>
          </div>
          <div className="text-right sm:col-span-2">
            <span className="inline-flex rounded-md shadow-sm">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Submit
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


      {/* <div className="max-w-3xl mx-auto">
        <div className="prose lg:prose-xl">
          Need to get in touch? I make it a point to respond to every comment
          on this blog and social media. If email is more appropriate, just fill
          out this form and I'll get back to you.

          <div className="form-wrapper">
        <form method="POST" className="contact-form" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message</label><br /><textarea id="message" name="message" />
          </p>
          <p>
            <button className="button" type="submit">Send ✉</button>
          </p>
        </form>
      </div>
        </div>
      </div> */}

  </>
}

export default Contact;
