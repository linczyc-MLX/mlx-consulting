import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MLX Consulting",
  description: "MLX Consulting privacy policy covering data collection, usage, and protection practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-[170px] pb-[80px] md:pb-[100px] px-6 md:px-[50px] bg-cream">
      <div className="max-w-3xl">
        <h1 className="mb-10">Privacy Policy</h1>

        <div className="space-y-8 text-[16px] leading-[26px] text-dark/80">
          <div>
            <h3 className="mb-3 text-dark">Introduction</h3>
            <p>
              MLX Consulting (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or engage
              with our services. Please read this policy carefully to understand our
              practices regarding your personal data.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Information We Collect</h3>
            <p className="mb-3">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, and
                other contact details you voluntarily provide when filling out forms or
                contacting us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and use our
                website, including your IP address, browser type, operating system,
                referring URLs, and pages viewed.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use cookies, web
                beacons, and similar technologies to collect information about your
                browsing activities on our site.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-dark">How We Use Your Information</h3>
            <p className="mb-3">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our website and services.</li>
              <li>To respond to your inquiries and fulfill your requests.</li>
              <li>To send you marketing and promotional communications (with your consent).</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Cookies</h3>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are
              small text files stored on your device that help us analyze website traffic
              and customize content. You can choose to disable cookies through your browser
              settings, but this may limit your ability to use certain features of our
              website.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Third-Party Services</h3>
            <p>
              We may use third-party service providers to assist us in operating our
              website and conducting our business. These providers may have access to your
              personal information only to perform specific tasks on our behalf and are
              obligated to protect your data in accordance with applicable laws.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration, disclosure,
              or destruction. However, no method of transmission over the Internet or
              electronic storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Your Rights</h3>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights regarding
              your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access and receive a copy of your personal data.</li>
              <li>The right to rectify or update inaccurate data.</li>
              <li>The right to request deletion of your personal data.</li>
              <li>The right to restrict or object to processing of your data.</li>
              <li>The right to data portability.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data
              practices, please contact us at{" "}
              <a
                href="mailto:info@mlxconsulting.com"
                className="text-accent-orange hover:underline"
              >
                info@mlxconsulting.com
              </a>
              .
            </p>
          </div>

          <div className="pt-4 border-t border-dark/10">
            <p className="text-[14px] text-dark/50">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
