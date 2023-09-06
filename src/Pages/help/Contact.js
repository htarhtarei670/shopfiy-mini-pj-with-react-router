import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom';

const Contact = () => {
  const requireMessage = useActionData();
  console.log(requireMessage);
    return (
      <div className='mt-5'>
        <h3>Contact Us</h3>
        <Form method='post' action="/help/contact" className="input-form">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="2"
              placeholder="Type message...."
            ></textarea>
          </div>
          {requireMessage && requireMessage.error && <p className='text-danger'>{requireMessage.error }</p>}
          <button type='submit' className='btn btn-primary'>Send</button>
        </Form>
      </div>
    );
}

export default Contact;

export const contactAction = async ({request}) => {
  const userInput = await request.formData();

  const userData = {
    email:userInput.get("email"),
    message:userInput.get("message")
  }
  
  //return error massage
  if (userData.message.length < 10) {
   return { error: "You must be have more 10 letter" };
  }
  //redirect page
  return redirect("/")
}
