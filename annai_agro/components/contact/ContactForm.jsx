"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

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
    
    const loadingToast = toast.loading("Sending your inquiry...")
    
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Inquiry sent successfully to Sales!", { id: loadingToast });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || "Failed to send mail");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(error.message, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
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
            placeholder="" 
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
            placeholder="" 
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
            placeholder="" 
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
            placeholder=""
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