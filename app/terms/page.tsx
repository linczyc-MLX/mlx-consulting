import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | MLX Consulting",
  description: "MLX Consulting terms and conditions for use of our website and services.",
};

export default function TermsPage() {
  return (
    <section className="pt-[170px] pb-[80px] md:pb-[100px] px-6 md:px-[50px] bg-cream">
      <div className="max-w-3xl">
        <h1 className="mb-10">Terms &amp; Conditions</h1>

        <div className="space-y-8 text-[16px] leading-[26px] text-dark/80">
          <div>
            <h3 className="mb-3 text-dark">Acceptance of Terms</h3>
            <p>
              By accessing and using the MLX Consulting website, you accept and agree to be
              bound by these Terms and Conditions. If you do not agree to these terms, please
              do not use our website or services. We reserve the right to modify these terms
              at any time, and your continued use of the website constitutes acceptance of any
              changes.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Use of Website</h3>
            <p className="mb-3">
              You agree to use this website only for lawful purposes and in a way that does
              not infringe upon the rights of others or restrict their use of the website.
              Prohibited behavior includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using the website in any way that violates applicable laws or regulations.</li>
              <li>Attempting to gain unauthorized access to any part of the website or its systems.</li>
              <li>Transmitting any harmful, offensive, or disruptive content.</li>
              <li>Using automated tools to scrape, collect, or harvest data from the website.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Intellectual Property</h3>
            <p>
              All content on this website, including but not limited to text, graphics, logos,
              images, videos, and software, is the property of MLX Consulting or its content
              suppliers and is protected by international copyright, trademark, and other
              intellectual property laws. You may not reproduce, distribute, modify, or create
              derivative works from any content without prior written consent.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Services</h3>
            <p>
              MLX Consulting provides real estate development advisory, design management,
              and construction consulting services. The information presented on this website
              is for general informational purposes only and does not constitute professional
              advice. Any reliance you place on such information is at your own risk. Formal
              engagement of our services is subject to separate written agreements.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, MLX Consulting shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising
              from your use of the website or services. This includes, without limitation,
              loss of profits, data, goodwill, or other intangible losses, even if we have
              been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites or services that are not
              owned or controlled by MLX Consulting. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of any
              third-party websites. You acknowledge and agree that we shall not be liable for
              any damage or loss caused by the use of such external sites.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless MLX Consulting, its officers,
              directors, employees, and agents from any claims, liabilities, damages, losses,
              or expenses arising from your use of the website, violation of these terms, or
              infringement of any third-party rights.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Governing Law</h3>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance
              with the laws of the State of New York, United States, without regard to its
              conflict of law provisions. Any disputes arising under these terms shall be
              subject to the exclusive jurisdiction of the courts located in New York County.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-dark">Contact Information</h3>
            <p>
              If you have any questions about these Terms and Conditions, please contact us
              at{" "}
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
