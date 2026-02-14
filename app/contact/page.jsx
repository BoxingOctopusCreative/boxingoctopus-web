'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

export default function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      Swal.fire({
        icon: 'error',
        title: 'Configuration error',
        text: 'Email service is not configured.',
      });
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, { publicKey: USER_ID }).then(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
        e.target.reset();
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        });
      }
    );
  };

  return (
    <div className="container mx-auto">
      <div className="font-bebas text-[90px] leading-none mb-12">Contact</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="font-bebas text-2xl">
          <p>
            If you have any questions, comments, or concerns, please feel free to reach out to me on social media.
            <br />
            <a href="https://bsky.app/profile/boxingoctopus.social" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg"
                alt="Ryan Draga on Bluesky"
                className="w-[5%] min-w-[32px] inline mr-5 grayscale"
              />
            </a>
            <a href="https://www.linkedin.com/in/ryandraga" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="Ryan Draga on LinkedIn"
                className="w-[5%] min-w-[32px] inline mr-5 grayscale"
              />
            </a>
            <a href="https://hey.cafe/@boxingoctopus" target="_blank" rel="noreferrer">
              <img
                src="https://assets.heycafecdn.com/logos/svg/logo_round_transparent_purple.svg?cache=wqn4mia5vlfugr4"
                alt="Ryan Draga on Hey.Café"
                className="w-[5%] min-w-[32px] inline mr-5 grayscale"
              />
            </a>
            <br /><br />
            Additionally, feel free to contact me via email through the form on this page.
          </p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="from_email" className="block font-bebas text-xl mb-1">
              Email address
            </label>
            <input
              id="from_email"
              type="email"
              name="from_email"
              placeholder="Enter email"
              className="w-full font-bebas text-lg px-3 py-2 rounded-none border border-gray-600 bg-black text-white"
            />
          </div>
          <div>
            <label htmlFor="from_name" className="block font-bebas text-xl mb-1">
              Your Name
            </label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full font-bebas text-lg px-3 py-2 rounded-none border border-gray-600 bg-black text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bebas text-xl mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full font-bebas text-lg px-3 py-2 rounded-none border border-gray-600 bg-black text-white resize-y"
            />
          </div>
          <button
            type="submit"
            className="font-bebas text-lg px-4 py-2 rounded-none bg-gray-600 text-white hover:bg-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
