import React, { useState } from 'react';


const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ... form,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = 'Name is required';
        if (!form.email) {
          newErrors.email = 'Email is required';
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(form.email)) newErrors.email = 'Invalid email address';
        }
        if (!form.message) newErrors.message = 'Message is required';
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          alert('Form submitted successfully!');
          setForm({ name: '', email: '', message: '' });
          setErrors({});
        }
      };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Message</label>
                    <textarea                     
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;