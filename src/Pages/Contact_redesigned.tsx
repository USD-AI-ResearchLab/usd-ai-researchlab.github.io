import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  const sidebar = (
    <div className="space-y-8">
      {/* Direct Contact */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Direct Contact</h3>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-2">Email</p>
            <a href="mailto:usd.airesearch.lab@gmail.com" className="text-red-600 hover:underline block text-sm">
              usd.airesearch.lab@gmail.com
            </a>
            <a href="mailto:kc.santosh@usd.edu" className="text-red-600 hover:underline block text-sm">
              kc.santosh@usd.edu
            </a>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">Phone</p>
            <p className="text-sm">(605) 658-6841</p>
          </div>
        </div>
      </div>

      {/* Office Location */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Office Location</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Department of Computer Science<br />
          University of South Dakota<br />
          Vermillion, SD 57069<br />
          USA
        </p>
      </div>

      {/* Response Time */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2 text-lg">Response Time</h3>
        <p className="text-sm text-blue-800 leading-relaxed">
          We typically respond to inquiries within 2-3 business days. For urgent matters, please include [URGENT] in your subject line.
        </p>
      </div>

      {/* Social Media */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Follow Us</h3>
        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-red-600 text-gray-700 hover:text-white flex items-center justify-center text-sm font-bold transition">
            f
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-red-600 text-gray-700 hover:text-white flex items-center justify-center text-sm font-bold transition">
            𝕏
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-red-600 text-gray-700 hover:text-white flex items-center justify-center text-sm font-bold transition">
            in
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in Touch with USD AI Research Lab"
      email="usd.airesearch.lab@gmail.com"
      phone="+1 (605) 658-6841"
      sidebar={sidebar}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Have questions about our research, opportunities, or collaborations? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {submitted && (
          <div className="p-4 mb-6 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-semibold">
              Thank you! Your message has been sent successfully. We'll be in touch shortly.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="What is your message about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaboration Inquiries</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Interested in collaborating with us? We welcome partnerships with:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">•</span>
            <span>Academic institutions and research centers</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">•</span>
            <span>Industry partners and technology companies</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">•</span>
            <span>Government agencies and funding organizations</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">•</span>
            <span>Non-profit organizations and community groups</span>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
};

export default Contact;
