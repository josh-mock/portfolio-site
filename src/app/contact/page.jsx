"use client";
import styles from "@/app/about/about.module.css";
import Footer from "@/components/layout/Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";

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
    const formData = new FormData();
    formData.append("form-name", "contact v1");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      await toast.promise(
        fetch("/", {
          method: "POST",
          body: formData,
        }),
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
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <Toaster />
      <section id="contact" className={`${styles.contact} container section`}>
        <h1 className={styles.contact__title}>Get In Touch</h1>
        <p className={styles.contact__description}>
          I'm currently looking for opportunities to start my career in tech. If
          you're hiring or think I’d be a good fit for your team, feel free to
          reach out — I’d love to connect!
        </p>

        <form
          className={styles.contact__form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          name="contact v1"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify="true"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <input type="hidden" name="bot-field" />
          <div className={styles.contact__formRow}>
            <div
              className={`${styles.contact__formGroup} ${styles.contact__formGroupName}`}
            >
              <label
                className={styles.contact__formLabel}
                htmlFor="contact-name"
              >
                Name
              </label>
              <input
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                className={styles.contact__formInput}
                type="text"
                name="name"
                id="contact-name"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              <span
                id="contact-name-error"
                className={styles.contact__formError}
              >
                {errors.name?.message}
              </span>
            </div>
            <div
              className={`${styles.contact__formGroup} ${styles.contact__formGroupEmail}`}
            >
              <label
                className={styles.contact__formLabel}
                htmlFor="contact-email"
              >
                Email
              </label>
              <input
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={styles.contact__formInput}
                type="email"
                name="email"
                id="contact-email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              <span
                id="contact-email-error"
                className={styles.contact__formError}
              >
                {errors.email?.message}
              </span>
            </div>
            <div
              className={`${styles.contact__formGroup} ${styles.contact__formGroupMessage}`}
            >
              <label
                className={styles.contact__formLabel}
                htmlFor="contact-message"
              >
                Message
              </label>
              <textarea
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className={styles.contact__formMessage}
                name="message"
                id="contact-message"
                aria-invalid={!!errors.message}
                {...register("message", { required: true })}
              ></textarea>
              <span
                id="contact-message-error"
                className={styles.contact__formError}
              >
                {errors.message?.message}
              </span>
            </div>
            <div
              className={`${styles.contact__formGroup} ${styles.contact__formGroupButtons}`}
            >
              <button
                className={`${styles.contact__formBtn} btn ${
                  !isValid || !isDirty || isSubmitting ? styles.disabled : ""
                }`}
                type="submit"
                disabled={isSubmitting || !isValid || !isDirty}
              >
                Send message
              </button>

              <button
                className={`${styles.contact__formBtn} btn`}
                type="button"
                onClick={() => reset()}
                disabled={isSubmitting}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
