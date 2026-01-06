import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Replace these with your actual EmailJS Header
    // For now, using placeholders as requested in the plan
    // Service ID: 'service_gmail' (example)
    // Template ID: 'template_contact' (example)
    // Public Key: 'your_public_key' (example)

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: 'John Doe',
          from_email: form.email,
          to_email: 'hello@example.com',
          subject: form.subject,
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setLoading(false);
          setStatus('success');
          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setLoading(false);
          setStatus('error');
          console.error(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-[#112240] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <p className="text-primary font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Start Your Project
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           viewport={{ once: true }}
           className="bg-white dark:bg-[#0a192f] p-8 rounded-2xl shadow-xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <label className="flex-1 flex flex-col">
                <span className="text-gray-900 dark:text-gray-300 font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-gray-100 dark:bg-[#112240] py-4 px-6 placeholder:text-gray-500 text-gray-900 dark:text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </label>
              <label className="flex-1 flex flex-col">
                <span className="text-gray-900 dark:text-gray-300 font-medium mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-gray-100 dark:bg-[#112240] py-4 px-6 placeholder:text-gray-500 text-gray-900 dark:text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-gray-900 dark:text-gray-300 font-medium mb-2">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="bg-gray-100 dark:bg-[#112240] py-4 px-6 placeholder:text-gray-500 text-gray-900 dark:text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-900 dark:text-gray-300 font-medium mb-2">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-gray-100 dark:bg-[#112240] py-4 px-6 placeholder:text-gray-500 text-gray-900 dark:text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-primary transition-all resize-none"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/80 text-white py-4 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed self-center md:self-start"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-500 font-medium text-center mt-4">
                Thank you. I will get back to you as soon as possible.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-500 font-medium text-center mt-4">
                Ahh, something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-500 font-mono">
        <p>Designed & Built by John Doe</p>
      </footer>
    </section>
  );
};

export default Contact;
