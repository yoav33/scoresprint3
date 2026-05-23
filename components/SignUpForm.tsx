"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  studentName: string;
  parentName: string;
  email: string;
  school: string;
  studentPath: string;
  courseOption: string;
  goals: string;
  questions: string;
  consent: boolean;
};

const initialValues: FormValues = {
  studentName: "",
  parentName: "",
  email: "",
  school: "",
  studentPath: "",
  courseOption: "",
  goals: "",
  questions: "",
  consent: false
};

const signupEndpoint = process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT;
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@mathprepcourse.com";

function buildMailtoBody(values: FormValues) {
  return [
    "Hello,",
    "",
    "I would like to register interest in the Math Prep Course.",
    "",
    `Student name: ${values.studentName}`,
    `Parent / guardian name: ${values.parentName}`,
    `Email: ${values.email}`,
    `School: ${values.school || "Not provided"}`,
    `Starting pathway: ${values.studentPath}`,
    `Preferred course option: ${values.courseOption}`,
    `Goals: ${values.goals || "Not provided"}`,
    `Questions: ${values.questions || "None at the moment"}`,
    "",
    "Thank you."
  ].join("\n");
}

export function SignUpForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    tone: "success" | "error";
    message: string;
  } | null>(null);

  const updateField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((current) => ({
      ...current,
      [field]: value
    }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.consent) {
      setStatus({
        tone: "error",
        message: "Please confirm that you are happy to be contacted about registration."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      if (signupEndpoint) {
        const response = await fetch(signupEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...values,
            submittedAt: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setValues(initialValues);
        setStatus({
          tone: "success",
          message: "Thanks. Your registration request has been sent successfully."
        });
        return;
      }

      const subject = encodeURIComponent(
        `Math Prep Course sign-up: ${values.courseOption}`
      );
      const body = encodeURIComponent(buildMailtoBody(values));
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

      setStatus({
        tone: "success",
        message:
          "Your email app should open with a pre-filled registration message."
      });
    } catch {
      setStatus({
        tone: "error",
        message:
          "We could not send the form right now. Please try again or contact us directly by email."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="signup-form fade-up-delayed" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Student name
          <input
            autoComplete="name"
            onChange={(event) => updateField("studentName", event.target.value)}
            required
            type="text"
            value={values.studentName}
          />
        </label>

        <label>
          Parent / guardian name
          <input
            autoComplete="name"
            onChange={(event) => updateField("parentName", event.target.value)}
            required
            type="text"
            value={values.parentName}
          />
        </label>

        <label>
          Contact email
          <input
            autoComplete="email"
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={values.email}
          />
        </label>

        <label>
          School
          <input
            onChange={(event) => updateField("school", event.target.value)}
            type="text"
            value={values.school}
          />
        </label>

        <label>
          Starting pathway
          <select
            onChange={(event) => updateField("studentPath", event.target.value)}
            required
            value={values.studentPath}
          >
            <option value="">Select one</option>
            <option value="MYP5">MYP5</option>
            <option value="DP">DP</option>
            <option value="CP1">CP1</option>
          </select>
        </label>

        <label>
          Preferred course option
          <select
            onChange={(event) => updateField("courseOption", event.target.value)}
            required
            value={values.courseOption}
          >
            <option value="">Select one</option>
            <option value="MYP 1-day course (EUR 50)">MYP 1-day course (EUR 50)</option>
            <option value="DP 2-day prep course (EUR 75)">DP 2-day prep course (EUR 75)</option>
            <option value="DP 3-day refresher + prep course (EUR 100)">
              DP 3-day refresher + prep course (EUR 100)
            </option>
          </select>
        </label>
      </div>

      <label>
        Goals for the course
        <textarea
          onChange={(event) => updateField("goals", event.target.value)}
          placeholder="For example: rebuild confidence with algebra, prepare for DP pacing, or refresh key topics before term starts."
          rows={4}
          value={values.goals}
        />
      </label>

      <label>
        Questions or notes
        <textarea
          onChange={(event) => updateField("questions", event.target.value)}
          placeholder="Share any scheduling questions, topic requests, or anything else we should know."
          rows={4}
          value={values.questions}
        />
      </label>

      <label className="consent-row">
        <input
          checked={values.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          required
          type="checkbox"
        />
        <span>
          I agree to be contacted about course registration and follow-up details.
        </span>
      </label>

      <button className="button button-primary submit-button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Request A Place"}
      </button>

      <p className="form-note">
        GitHub Pages friendly: this form can post to a form service through
        <code> NEXT_PUBLIC_SIGNUP_ENDPOINT </code>
        or open a pre-filled email when no endpoint is configured.
      </p>

      {status ? (
        <p
          aria-live="polite"
          className={`form-status form-status-${status.tone}`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
