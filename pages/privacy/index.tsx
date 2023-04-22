import Layout from "@/components/layout/layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="pricing-header p-5 mx-auto text-center">
        <h1 className="display-4 fw-normal">Privacy policy</h1>
        <p className="fs-5 text-muted">
          At {process.env.NEXT_PUBLIC_TITLE}, we take your privacy seriously. We
          understand that your personal information is important and we are
          committed to protecting it. When you use our website to log in with
          your Google account, we collect only the necessary information to
          provide our services. This includes your name and email address. We do
          not share or sell your personal information to any third parties. We
          use your information only for the purposes of providing our English
          language classes and to communicate with you about our services. We
          may also use your information to improve our website and services, and
          to provide you with a better user experience. We use industry-standard
          security measures to protect your personal information, and we
          regularly review and update our security protocols to ensure the
          highest level of protection. If you have any questions or concerns
          about our Privacy Policy, please don&apos;t hesitate to contact us at{" "}
          <a href="mailto:privacy@inglesmiami.com">privacy@inglesmiami.com</a>.
          We will do our best to assist you and provide any information you may
          need. Thank you for choosing {process.env.NEXT_PUBLIC_TITLE} as your
          English language learning partner. We are committed to protecting your
          privacy and providing you with the best possible user experience.
        </p>
      </div>
    </Layout>
  );
}
