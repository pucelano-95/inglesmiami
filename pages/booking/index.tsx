import Layout from "@/components/layout/layout";
import Calendly from "@/components/shared/calendly";
import React from "react";

export default function Booking() {
  return (
    <Layout className="p-5 mx-auto text-center">
      <h1 className="display-4 fw-normal delauney-font">Reserva una clase</h1>
      <Calendly />
    </Layout>
  );
}
