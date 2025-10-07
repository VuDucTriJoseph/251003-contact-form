import { useState } from "react";
import { useForm } from "react-hook-form";
import Message from "./message";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { isSubmmited, setIsSubmited } = useState(false);

  function onSubmit(data) {
    console.log(data);

    // show success mes
    setIsSubmited(true);

    //reset form
    reset();

    //hide success mes after 3s
    setTimeout(() => setIsSubmited(false), 3000);
  }
  return (
    <>
      <form id="form-contact" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Contact Us</h2>
        <div className="name">
          <label htmlFor="name-firstName">First Name</label>
          <input
            type="text"
            //   name="firstName" become register
            id="name-firstName"
            aria-required="true"
            aria-invalid={errors.firstName ? "true" : "false"}
            aria-describedby="name-firstName--required"
            autoComplete="given-name"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <p id="name-firstName--required">{errors.firstName.message}</p>
          )}

          <label htmlFor="name-lastName">Last Name</label>
          <input
            type="text"
            //   name="lastName"
            id="name-lastName"
            //   required
            aria-required="true"
            aria-invalid={errors.lastName ? "true" : "false"}
            aria-describedby="name-lastName--required"
            autoComplete="family-name"
            {...register("lastName", {
              required: "This field is required",
            })}
          />
          {errors.lastName && (
            <p id="name-lastName--required">{errors.lastName.message}</p>
          )}
        </div>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            //   name="email"
            id="email"
            //   required
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-required="true"
            aria-describedby="email-invalid email-required"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email?.type === "pattern" && (
            <p id="email-invalid">{errors.email.message}</p>
          )}
          {errors.email?.type === "required" && (
            <p id="email-required">{errors.email.message}</p>
          )}
        </div>
        <fieldset
          aria-required="true"
          aria-describedby="query-selected"
          aria-invalid={errors.queryType ? "true" : "false"}
        >
          <legend>Query Type</legend>
          <input
            type="radio"
            //   name="queryType"
            value="general"
            {...register("queryType", {
              required: "Please select a query type",
            })}
            id="query-general"
          />
          <label htmlFor="query-general">General Enquiry</label>

          <input
            type="radio"
            //   name="queryType"
            value="support"
            id="query-support"
            {...register("queryType")}
          />
          <label htmlFor="query-support">Support Request</label>

          {errors.queryType && (
            <p id="query-selected">{errors.queryType.message}</p>
          )}
        </fieldset>
        <div className="text-mes">
          <label htmlFor="message">Message</label>
          <textarea
            //   name="message"
            id="message"
            //   required
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-required"
            {...register("message", { require: "This field is required" })}
          ></textarea>
          {errors.message && (
            <p id="message-required">{errors.message.message}</p>
          )}
        </div>
        <div className="accept">
          <input
            type="checkbox"
            //   name="accept"
            id="accept"
            value="true"
            //   required
            aria-required="true"
            aria-invalid={errors.accept ? "true" : "false"}
            aria-describedby="accept-required"
            {...register("accept", {
              require: "To submit this form, please consent to being contacted",
            })}
          />
          <label htmlFor="accept">
            I consent to being contacted by the team
          </label>
          {errors.accept && <p id="accept-required">{errors.accept.message}</p>}
        </div>

        <input type="submit" />
      </form>
      {isSubmmited && <Message />}
    </>
  );
}
export default ContactForm;
