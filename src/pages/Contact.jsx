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

    const handleSubmit = (e) => {
        e.preventDefault();
           // Add form validation and submission logic here
           //
           //
           //
           //
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