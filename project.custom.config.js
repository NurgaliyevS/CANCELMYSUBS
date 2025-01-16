import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "winter",
    main: themes[`[data-theme=winter"]`],
  },
  domainName: "cancelmysubs.com",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `CancelMySubs <noreply@mg.cancelmysubs.com>`,
    fromAdmin: `CancelMySubs <admin@mg.cancelmysubs.com>`,
    supportEmail: "support@cancelmysubs.com",
    forwardRepliesTo: "nurgasab@gmail.com",
  },
  documentTitle: "Cancel Your Subscriptions - CancelMySubs",
  domainWithHttps: "https://cancelmysubs.com",
  seo: {
    keywords:
      "cancel subscriptions, subscription management, subscription cancellation service, how to cancel subscriptions, subscription tracker",
    description:
      "Take control of your subscriptions with CancelMySubs! Easily manage and cancel unwanted subscriptions. Save money and time with our simple subscription management platform.",
    themeColor: "#ffffff",
    applicationName: "CancelMySubs",
    og: {
      title: "CancelMySubs - Cancel Your Subscriptions",
      url: "https://cancelmysubs.com",
      image: "https://cancelmysubs.com/company_related/og-image.png",
      imageAlt:
        "CancelMySubs - Cancel Your Subscriptions. Save money and take control of your recurring payments.",
      content: "https://x.com/tech_nurgaliyev",
      twitterSite: "@tech_nurgaliyev",
      twitterImage: "https://cancelmysubs.com/company_related/og-image.png",
    },
  },
  blog: {
    title: "CancelMySubs Blog",
    description:
      "Tips for managing subscriptions, how to save money on recurring payments, subscription management guides, identifying unnecessary subscriptions, subscription tracking methods",
    canonical: "https://cancelmysubs.com/blog",
    author: {
      name: "Sabyr Nurgaliyev",
      description:
        "I am a software engineer passionate about helping people manage their finances better. After seeing how difficult it can be to keep track of and cancel unwanted subscriptions, I created CancelMySubs to simplify the process and help users save money on unnecessary recurring payments.",
    },
  },
};