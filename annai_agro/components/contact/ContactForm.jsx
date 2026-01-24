"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Logic for your Express.js API call goes here
    console.log("Form Data:", formData);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Inquiry sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
            Full Name
          </label>
          <input 
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text" 
            className="w-full px-6 py-4 rounded-full bg-white border border-slate-200 focus:border-[#67944e] focus:ring-4 focus:ring-[#67944e]/5 outline-none transition-all text-sm font-medium" 
            placeholder="John Doe" 
          />
        </div>

        {/* Company Email */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
            Company Email
          </label>
          <input 
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email" 
            className="w-full px-6 py-4 rounded-full bg-white border border-slate-200 focus:border-[#67944e] focus:ring-4 focus:ring-[#67944e]/5 outline-none transition-all text-sm font-medium" 
            placeholder="john@company.com" 
          />
        </div>

        {/* Subject */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
            Subject
          </label>
          <input 
            required
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text" 
            className="w-full px-6 py-4 rounded-full bg-white border border-slate-200 focus:border-[#67944e] focus:ring-4 focus:ring-[#67944e]/5 outline-none transition-all text-sm font-medium" 
            placeholder="Bulk Turmeric Inquiry / Shipping Quote" 
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-400">
            Message
          </label>
          <textarea 
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4" 
            className="w-full px-6 py-8 rounded-[2rem] bg-white border border-slate-200 focus:border-[#67944e] focus:ring-4 focus:ring-[#67944e]/5 outline-none transition-all text-sm font-medium resize-none" 
            placeholder="Describe your requirements (Quantity, Destination, Grade)..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          disabled={isSubmitting}
          type="submit"
          className="md:col-span-2 flex items-center justify-center gap-3 py-5 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#67944e] disabled:bg-slate-400 transition-all transform active:scale-95"
        >
          {isSubmitting ? "Processing..." : (
            <>
              Send Inquiry <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;