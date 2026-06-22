'use client'

import React, { useState } from 'react'
import { personalInfo } from '@/data'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { Mail, MapPin, Github, Linkedin, Send, MessageSquare, Check, X } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate direct secure compile and submit success
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
    }, 1200)
  }

  const handleReset = () => {
    setSubmitStatus('idle')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white font-sans border-b border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header descriptions label */}
        <div className="space-y-4 max-w-xl text-left">
          <SectionLabel>09. CONTACT CHANNELS</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0f1a] leading-tight tracking-tight">
            Let&apos;s Build <span className="text-[#2563eb]">Something</span>
          </h2>
          <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed">
            I am open to full-time developer internships, freelance scopes, and software engineering collaborations. Leave me a line and let&apos;s get chatting!
          </p>
        </div>

        {/* Form and personal info blocks split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Card left side column detailing handles */}
          <div className="lg:col-span-5 bg-slate-50 border border-[#e5e7eb] rounded-[20px] p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-[#0f0f1a] tracking-tight">
                Contact Information
              </h3>
              
              <div className="space-y-4 text-slate-600">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 hover:text-[#2563eb] transition-colors group p-1"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563eb] group-hover:scale-105 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">write an email</span>
                    <span className="font-semibold text-sm sm:text-base">{personalInfo.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-1">
                  <div className="w-10 h-10 rounded-[10px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563eb]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Current Location</span>
                    <span className="font-semibold text-sm sm:text-base">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-1">
                  <div className="w-10 h-10 rounded-[10px] bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563eb]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Typical Response</span>
                    <span className="font-semibold text-sm sm:text-base">Within 24 working hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom quick links group details */}
            <div className="pt-6 border-t border-slate-200">
              <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">
                Connect on social channels
              </span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="px-4 py-2 border border-[#e5e7eb] rounded-[8px] bg-white text-slate-650 hover:text-[#2563eb] hover:border-[#2563eb] hover:bg-blue-50 transition-all font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer referrerPolicy"
                  className="px-4 py-2 border border-[#e5e7eb] rounded-[8px] bg-white text-slate-650 hover:text-[#2563eb] hover:border-[#2563eb] hover:bg-blue-50 transition-all font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form write fields card right side column */}
          <div className="lg:col-span-7 bg-white border border-[#e5e7eb] rounded-[20px] p-6 sm:p-10 shadow-xs relative overflow-hidden flex flex-col justify-center min-h-[440px]">
            {submitStatus === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-[#e5e7eb] rounded-[8px] p-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:border-[#2563eb] focus:bg-white transition-all text-[#0f0f1a] font-medium"
                      placeholder="Mantu Kumar"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-[#e5e7eb] rounded-[8px] p-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:border-[#2563eb] focus:bg-white transition-all text-[#0f0f1a] font-medium"
                      placeholder="mantuforwork@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Subject Scope
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-[#e5e7eb] rounded-[8px] p-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:border-[#2563eb] focus:bg-white transition-all text-[#0f0f1a] font-medium"
                    placeholder="Inquiry about Freelance Project"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Scope Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-[#e5e7eb] rounded-[8px] p-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:border-[#2563eb] focus:bg-white transition-all text-[#0f0f1a] font-medium leading-relaxed"
                    placeholder="Hey Mantu, I have a project idea and wanted to scope..."
                  ></textarea>
                </div>

                {/* Action trigger button */}
                <div className="flex justify-end pt-2">
                  <Button variant="primary" id="submit-btn" className="py-3 px-8 text-sm gap-2 font-bold cursor-pointer" type="submit">
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}

            {/* POPUP on form submission success */}
            {submitStatus === 'success' && (
              <div className="p-8 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f0f1a] tracking-tight">
                    Your message has been compiled successfully!
                  </h3>
                  <p className="text-sm text-[#md] text-[#6b7280] leading-relaxed max-w-md mx-auto">
                    Mantu has indexed your request. Re-compiling state... Expect an email response in under 24 hours!
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#0f0f1a] hover:bg-[#2563eb] text-white font-bold text-xs rounded-lg transition-colors uppercase tracking-wider mx-auto flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Send Another Message</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
