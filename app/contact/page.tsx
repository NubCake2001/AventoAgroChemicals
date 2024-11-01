'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from '@/hooks/use-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    message: ''
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    })
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      city: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-600 p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">Contact Us</h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white bg-opacity-20 p-6 rounded-2xl mb-8 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-white">Hello to Avento!</h2>
            <p className="text-lg text-white opacity-90">
              Thanks for your interest. Please use this area to ask a question, make a comment or request information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white bg-opacity-20 p-6 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-white bg-opacity-70 border-0 text-white placeholder-white placeholder-opacity-10 focus:ring-2 focus:ring-green-500"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white bg-opacity-70 border-0 text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-green-500"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="bg-white bg-opacity-70 border-0 text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-green-500"
                />
                <Input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-white bg-opacity-70 border-0 text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-green-500"
                />
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white bg-opacity-70 border-0 text-white placeholder-white placeholder-opacity-60 focus:ring-2 focus:ring-green-500"
                  rows={4}
                />
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors duration-300">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white bg-opacity-20 p-6 rounded-2xl text-white"
            >
              <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Headquarters</h3>
                    <p>123 Agro Street, Farmville</p>
                    <p>Country, 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Research Center</h3>
                    <p>456 Innovation Avenue, Techville</p>
                    <p>Country, 67890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p>info@avento.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}