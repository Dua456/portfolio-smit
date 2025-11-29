import React from "react";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div id="contact" className="py-16 bg-gray-50 text-center">
      {/* Heading */}
      <div className="mb-8">
        <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded-full text-sm">
          Get in touch
        </button>
        <p className="text-lg max-w-3xl mx-auto text-gray-900 text-center mt-6">
          What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center justify-center gap-3 text-lg font-semibold">
          <Mail className="w-6 h-6" />
          <span>duahussain569@gmail.com</span>
          <button
            onClick={() => copyToClipboard("duahussain569@gmail.com")}
            className="text-gray-400 hover:text-gray-700"
          >
            📋
          </button>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3 text-lg font-semibold">
          <Phone className="w-6 h-6" />
          <span>+92 3458956822</span>
          <button
            onClick={() => copyToClipboard("+92 3458956822")}
            className="text-gray-400 hover:text-gray-700"
          >
            📋
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-6 text-gray-600">
        <a href="https://github.com/Dua456" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-black transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/dua-shakir-0692b82b9/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://www.instagram.com/piyare_guriya_284/?utm_source=qr&igsh=aHh1b2VyMWw1anZz#" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://www.facebook.com/share/1QeZyHkCHz/" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:text-blue-800 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
