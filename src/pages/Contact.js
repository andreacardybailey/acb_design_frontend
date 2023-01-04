function Contact() {
  return (
    <div className="Contact" data-testid="contact">
      <h1>Contact Me</h1>
      <form action="">
        <fieldset>
          <label htmlFor="first-name">*First Name</label>
          <input type="text" id="first-name" placeholder="First Name" />
          <label htmlFor="last-name">*Last Name</label>
          <input type="text" id="last-name" placeholder="Last Name" />
          <label htmlFor="email">*Email Address</label>
          <input type="text" id="email" placeholder="
          Email" />
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="First Name" />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;