import React from "react";
import AppointmentFrom from "../components/AppointmentFrom";
import Hero from "../components/Hero";

const Appointment = () => {
  return (
    <div>
      <Hero
        title={"Schedule Your Appointment | VkCare Medicla institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentFrom />
    </div>
  );
};

export default Appointment;
