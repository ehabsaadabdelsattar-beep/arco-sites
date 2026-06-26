import { useState } from "react";
import { Send, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { useTranslation } from "react-i18next";

const projectTypeKeys = ["hotel", "real_estate", "restaurant", "ecommerce", "other"];
const budgetRangeKeys = ["landing", "corporate", "ecommerce", "custom"];

export function ProjectRequestForm() {
  const { t } = useTranslation("contact");
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    project_type: "",
    budget_range: "",
    description: "",
    deadline: "",
    client_name: "",
    client_email: "",
    client_phone: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((p) => Math.min(p + 1, 4));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send email using FormSubmit to the company's email
      const response = await fetch("https://formsubmit.co/ajax/arcosites@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.client_name,
          Email: formData.client_email,
          Phone: formData.client_phone,
          "Project Type": formData.project_type,
          "Budget Range": formData.budget_range,
          Deadline: formData.deadline || "Not specified",
          Description: formData.description,
          _subject: `New Project Request from ${formData.client_name}`,
          _template: "table"
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(t("form.error_submit"));
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-card/30 rounded-2xl border border-border/40">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h2
          className="mt-6 text-2xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("form.success_title")}
        </h2>
        <p className="mt-4 text-muted-foreground">
          {t("form.success_desc", { name: formData.client_name })}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/40 bg-card/30 p-6 sm:p-8">
      {error && (
        <div className="mb-6 p-4 rounded-md bg-destructive/10 text-destructive text-sm font-medium">
          {error}
        </div>
      )}

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 mx-1 rounded-full ${s <= step ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
        <div className="text-xs text-muted-foreground text-center font-medium uppercase tracking-wider">
          {t("form.step_of", { current: step, total: 4 })}
        </div>
      </div>

      <form
        onSubmit={
          step === 4
            ? handleSubmit
            : (e) => {
                e.preventDefault();
                nextStep();
              }
        }
      >
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {t("form.step1_title")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypeKeys.map((key) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => {
                    updateForm("project_type", key);
                    nextStep();
                  }}
                  className={`p-4 text-start rounded-xl border transition-all ${
                    formData.project_type === key
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border hover:border-primary/50 text-foreground bg-background"
                  }`}
                >
                  {t(`project_types.${key}`)}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {t("form.step2_title")}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {budgetRangeKeys.map((key) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => {
                    updateForm("budget_range", key);
                    nextStep();
                  }}
                  className={`p-4 text-start rounded-xl border transition-all ${
                    formData.budget_range === key
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border hover:border-primary/50 text-foreground bg-background"
                  }`}
                >
                  {t(`budgets.${key}`)}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl font-semibold mb-4 text-foreground">{t("form.step3_title")}</h3>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground">
                {t("form.description_label")}
              </label>
              <textarea
                id="description"
                rows={4}
                required
                value={formData.description}
                onChange={(e) => updateForm("description", e.target.value)}
                className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={t("form.description_placeholder")}
              />
            </div>
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-foreground">
                {t("form.deadline_label")}
              </label>
              <input
                id="deadline"
                type="text"
                value={formData.deadline}
                onChange={(e) => updateForm("deadline", e.target.value)}
                className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={t("form.deadline_placeholder")}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl font-semibold mb-4 text-foreground">{t("form.step4_title")}</h3>
            <div>
              <label htmlFor="client_name" className="block text-sm font-medium text-foreground">
                {t("form.name_label")}
              </label>
              <input
                id="client_name"
                type="text"
                required
                value={formData.client_name}
                onChange={(e) => updateForm("client_name", e.target.value)}
                className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={t("form.name_placeholder")}
              />
            </div>
            <div>
              <label htmlFor="client_email" className="block text-sm font-medium text-foreground">
                {t("form.email_label")}
              </label>
              <input
                id="client_email"
                type="email"
                required
                value={formData.client_email}
                onChange={(e) => updateForm("client_email", e.target.value)}
                className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={t("form.email_placeholder")}
              />
            </div>
            <div>
              <label htmlFor="client_phone" className="block text-sm font-medium text-foreground">
                {t("form.phone_label")}
              </label>
              <input
                id="client_phone"
                type="tel"
                required
                value={formData.client_phone}
                onChange={(e) => updateForm("client_phone", e.target.value)}
                className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder={t("form.phone_placeholder")}
              />
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {t("form.back")}
            </button>
          ) : (
            <div /> // Placeholder for flex spacing
          )}

          {step < 4 && (
            <button
              type="button"
              onClick={nextStep}
              disabled={
                (step === 1 && !formData.project_type) ||
                (step === 2 && !formData.budget_range) ||
                (step === 3 && !formData.description)
              }
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t("form.next")} <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </button>
          )}

          {step === 4 && (
            <button
              type="submit"
              disabled={
                loading || !formData.client_name || !formData.client_email || !formData.client_phone
              }
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {loading ? t("form.submitting") : t("form.submit")}
              {!loading && <Send className="h-4 w-4 rtl:rotate-180" />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
