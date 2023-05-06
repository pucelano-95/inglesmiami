import Layout from "@/components/layout/layout";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <h1 className="display-4 fw-normal">Reserva una clase</h1>
      <InlineWidget url="https://calendly.com/ralph-barrero-inglesmiami/clases?hide_gdpr_banner=1" />
    </Layout>
  );
}
