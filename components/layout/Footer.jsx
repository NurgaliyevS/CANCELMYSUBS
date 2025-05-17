import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-md py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              cancelmysubs.com
            </h3>
            <p className="text-gray-600 mb-4">
              Stop Wasting Money on Subscriptions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://x.com/tech_nurgaliyev"
                target="_blank"
                title="X tech_nurgaliyev"
                className="hover:opacity-75 transition-opacity"
              >
                <Image
                  src={"/x.png"}
                  alt="X"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/samat-n-43b4a822a/"
                target="_blank"
                title="Linkedin sabyr-nurgaliyev"
                className="hover:opacity-75 transition-opacity"
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="Linkedin"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </Link>
              <Link
                href="https://www.producthunt.com/@tech_nurgaliyev"
                target="_blank"
                title="ProductHunt tech_nurgaliyeev"
                className="hover:opacity-75 transition-opacity"
              >
                <Image
                  src={"/productHunt.svg"}
                  alt="ProductHunt"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#pricing", label: "Pricing" },
                { href: "#freedom", label: "Reality Check" },
                { href: "#faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Projects Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              More Projects
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                { href: "https://www.redditscheduler.com", label: "Reddit Scheduler" },
                { href: "https://mvpagency.org/", label: "MVPAgency" },
                { href: "https://pregnantmeal.com/", label: "PregnantMeal" },
                { href: "https://bestwebsitegames.com/", label: "Best Website Games" },
                { href: "https://redditagency.com/", label: "Reddit Agency" },
                { href: "https://snapmybaby.com/", label: "SnapMyBaby" },
                {
                  href: "https://environmentaljobboards.com/",
                  label: "Environmental Job Boards",
                },
                { href: "https://subpage.io/", label: "SubPage" },
                { href: "https://uptimefriend.com/", label: "UptimeFriend" },
                { href: "https://tripplanss.com/", label: "TripPlanss" },
                { href: "https://weeealth.com/", label: "Weeealth" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy;{currentYear} cancelmysubs.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
