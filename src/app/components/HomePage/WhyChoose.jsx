import React from "react";
import { ArrowRight, Calendar, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    heading: "Small Groups",
    text: "Events designed for 5-15 people. Quality conversations over quantity. Feel comfortable and heard.",
  },

  {
    icon: <Calendar className="w-8 h-8 text-accent" />,
    heading: "Curated Events",
    text: "Thoughtfully selected activities that foster meaningful connections in comfortable settings.",
  },

  {
    icon: <Shield className="w-8 h-8 text-success" />,
    heading: "Safe Space",
    text: "Respectful, welcoming environment where everyone feels valued and can be themselves.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Gather?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A platform designed with introverts in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {feature.heading}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {/* Events designed for 5-15 people. Quality conversations over quantity. */}
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
