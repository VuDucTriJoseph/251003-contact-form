function ContactForm (){
    return (
        
        <form id="form-contact">
            <label htmlFor="form-contact">Contact Us</label>
            <fieldset>
                
            <label htmlFor="name-firstName">First Name</label>
            <input type="text" name="firstName" id="name-firstName" required aria-describedby="name-firstName--required"/>
            <p id="name-firstName--required">This field is required</p>
            
            <label htmlFor="name-lastName">Last Name</label>
            <input type="text" name="lastName" id="name-lastName" required aria-describedby="name-lastName--required"/>
            <p id="name-lastName--required">This field is required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required autocomplete="email" aria-invalid="true" aria-describedby="email-invalid email-required"/>
                <p id="email-invalid">Please enter a valid email address</p>
                <p id="email-required">This field is required</p>
            </fieldset>
            <fieldset>
                <legend>Query Type</legend>
                <input type="radio" name="queryType" value="general" id="query-general" />
                <label htmlFor="query-general">General Enquiry</label>
                
                <input type="radio"  name="queryType" value="support" id="query-support" />
                <label htmlFor="query-support">Support Request</label>
                
                <p id="query-selected">Please select a query type</p>
            </fieldset>
            <fieldset>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required aria-describedby="message-required"></textarea>
                <p id="message-required">This field is required</p>
            </fieldset>
            <input type="checkbox" name="accept" id="accept" required aria-describedby="accept-required" />
            <label htmlFor="accept">I consent to being contacted by the team</label>
            <p id="accept-required">To submit this form, please consent to being contacted</p>
            
            <input type="submit"/>
        </form>
        
    )
}
export default ContactForm;