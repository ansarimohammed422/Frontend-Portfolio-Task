import React, { useState } from "react";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdLanguage,
  MdSend,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaCheckCircle,
  FaUsers,
  FaStar,
  FaRocket,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Handle form submission here
      console.log("Form submitted:", formData);

      // Show confirmation
      setShowConfirmation(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);

      // Auto-hide confirmation after 5 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="p-3 sm:p-5 mt-16 sm:mt-24" id="contact">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-3 m-2 sm:m-5">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-blue-500 font-bold text-center">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 text-center px-4">
          Have a project in mind or want to collaborate? I'd love to hear from
          you! Let's discuss how we can bring your ideas to life.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-blue-50 shadow-lg rounded-3xl p-4 sm:p-6 lg:p-10 m-2 sm:m-5">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <div className="bg-blue-100 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-4 lg:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <MdEmail size={16} className="lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm lg:text-base">
                      Email
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base break-all">
                      mohammed.ansari@email.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <MdPhone size={16} className="lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm lg:text-base">
                      Phone
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      +91 1234567890
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <MdLocationOn size={16} className="lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm lg:text-base">
                      Location
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Available for Remote Work
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                    <MdLanguage size={16} className="lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm lg:text-base">
                      Website
                    </h4>
                    <p className="text-gray-600 text-sm lg:text-base break-all">
                      www.mohammedansari.dev
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 lg:mt-8">
                <h4 className="font-semibold text-gray-800 mb-3 lg:mb-4 text-sm lg:text-base">
                  Follow Me
                </h4>
                <div className="flex gap-3 lg:gap-4">
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <FaFacebookF size={14} className="lg:w-4 lg:h-4" />
                  </div>
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <FaTwitter size={14} className="lg:w-4 lg:h-4" />
                  </div>
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <FaLinkedinIn size={14} className="lg:w-4 lg:h-4" />
                  </div>
                  <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <FaGithub size={14} className="lg:w-4 lg:h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-4 lg:mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm lg:text-base"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm lg:text-base lg:rows-6"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 lg:py-4 px-4 lg:px-6 rounded-lg font-semibold text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <MdSend size={16} className="lg:w-5 lg:h-5" />
                </button>

                {/* Inline Success Message */}
                {showConfirmation && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle
                        className="text-green-500 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <h4 className="text-green-800 font-semibold text-sm lg:text-base">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-green-700 text-sm mt-1">
                          Thank you for reaching out! I'll get back to you
                          within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 lg:mt-10 text-center">
          <div className="bg-blue-100 rounded-xl p-4 lg:p-6">
            <h4 className="text-lg lg:text-xl font-bold text-blue-500 mb-2">
              Ready to Start Your Project?
            </h4>
            <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base px-2">
              Whether it's a small website or a complex web application, I'm
              here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaRocket className="text-yellow-500" size={12} /> Quick
                Response
              </span>
              <span className="flex items-center gap-1">
                <FaStar className="text-blue-500" size={12} /> Professional
                Service
              </span>
              <span className="flex items-center gap-1">
                <FaCheckCircle className="text-green-500" size={12} /> Quality
                Results
              </span>
              <span className="flex items-center gap-1">
                <FaUsers className="text-purple-500" size={12} /> Collaborative
                Approach
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
