import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye } from "lucide-react";
import aboutWorkspace from "../assets/about-workspace.jpg";
import { useTranslation } from "react-i18next";


export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation("about");
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden">
        <img
          src={aboutWorkspace}
          alt="Modern web design workspace"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("hero_title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t("hero_subtitle")}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("who_title")}
        </h2>
        <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>{t("who_p1")}</p>
          <p>{t("who_p2")}</p>
          <p>{t("who_p3")}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-border/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/40 bg-card/30 p-8 lg:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3
                className="mt-5 text-2xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("mission_title")}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t("mission_desc")}
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card/30 p-8 lg:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h3
                className="mt-5 text-2xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("vision_title")}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t("vision_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("cta_title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {t("cta_desc")}
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("cta_button")}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
