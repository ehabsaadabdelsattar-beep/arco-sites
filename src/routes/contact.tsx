import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { ProjectRequestForm } from "../components/ProjectRequestForm";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arco Sites" },
      {
        name: "description",
        content:
          "Get in touch with Arco Sites to discuss your next web project. Free consultation available.",
      },
      { property: "og:title", content: "Contact — Arco Sites" },
      {
        property: "og:description",
        content:
          "Get in touch with Arco Sites to discuss your next web project. Free consultation available.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation("contact");
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("hero_title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t("hero_subtitle")}
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <ProjectRequestForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t("info.contact")}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("info.location")}
                    <br />
                    +20 102 629 6556
                    <br />
                    arcosites@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t("info.consultation")}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("info.consultation_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t("info.response")}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("info.response_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
