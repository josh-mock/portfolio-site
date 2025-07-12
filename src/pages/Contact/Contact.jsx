import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import "./Contact.css";
const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name is too short")
      .max(50, "Name is too long"),

    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),

    message: yup
      .string()
      .required("Message is required")
      .min(10, "Message is too short")
      .max(500, "Message is too long"),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const fakeRequest = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        success ? resolve("Message sent!") : reject("Something went wrong");
      }, 2000);
    });

    try {
      await toast.promise(
        fakeRequest,
        {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Failed to send message.",
        },
        {
          success: {
            duration: 4000,
          },
        }
      );
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Toaster />
      <section id="contact" className="contact container section">
        <h1 className="contact__title">Get In Touch</h1>
        <p className="contact__description">
          I'm currently looking for opportunities to start my career in tech. If
          you're hiring or think I’d be a good fit for your team, feel free to
          reach out — I’d love to connect!
        </p>

        <form
          className="contact__form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="contact__form-row">
            <div className="contact__form-group contact__form-group--name">
              <label className="contact__form-label" htmlFor="contact-name">
                Name
              </label>
              <input
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                className="contact__form-input"
                type="text"
                name="name"
                id="contact-name"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              <span id="contact-name-error" className="contact__form-error">
                {errors.name?.message}
              </span>
            </div>
            <div className="contact__form-group contact__form-group--email">
              <label className="contact__form-label" htmlFor="contact-email">
                Email
              </label>
              <input
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className="contact__form-input"
                type="email"
                name="email"
                id="contact-email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              <span id="contact-email-error" className="contact__form-error">
                {errors.email?.message}
              </span>
            </div>
            <div className="contact__form-group contact__form-group--message">
              <label className="contact__form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className="contact__form-message"
                name="message"
                id="contact-message"
                aria-invalid={!!errors.message}
                {...register("message", { required: true })}
              ></textarea>
              <span id="contact-message-error" className="contact__form-error">
                {errors.message?.message}
              </span>
            </div>
            <div className="contact__form-group contact__form-group--button">
              <button
                className="contact__form-btn btn"
                type="submit"
                disabled={isSubmitting || !isValid || !isDirty}
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
