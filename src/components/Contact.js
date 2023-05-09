import React, { useState } from 'react';
import doc from "../assets/images/doc.jpg";
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <img src={doc} alt='doc' height={500+'px'} style={{marginLeft:'15rem',marginTop:'4rem'}}/>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Contact Us</h2>
        <label htmlFor="name" style={styles.label}>Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} required />

        <label htmlFor="email" style={styles.label}>Email</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />

        <label htmlFor="message" style={styles.label}>Message</label>
        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} style={styles.input} required></textarea>

        <button type="submit" style={styles.button}>Send Message</button>
      </form><br/><br/>
    </div>
  );
}

export default ContactForm;

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#e481af',
    padding: '3rem',
    borderRadius: '1rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    margin: '0 auto',
    marginTop:'4%'

  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#333',
    width: '100%',
  },
  input: {
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    width: '100%',
    fontSize: '1.2rem',
    backgroundColor: '#f2f2f2',
    color: '#555',
  },
  button: {
    padding: '1.2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    width: '100%',
  },
  buttonHover: {
    backgroundColor: '#3e8e41',
  }
};
