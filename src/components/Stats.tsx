import { Button } from "@/components/ui/button";

const Stats = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          I am happy to know you that{" "}
          <span className="font-extrabold">300+ projects</span> done successfully!
        </h2>
        <Button size="lg" variant="secondary" className="mt-4">
          Hire me
        </Button>
      </div>
    </section>
  );
};

export default Stats;
