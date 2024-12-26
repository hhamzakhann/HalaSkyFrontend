import Container from "./Container";

export default function SectionInspiration() {
  return (
    <Container>
      <section className="max-w-4xl mx-auto py-14 md:px-12">
        <div className="text-center">
          <h2 className="font-medium text-4xl sm:text-6xl font-spartan mb-4">
            Journey Inspirations from Travelers
          </h2>
          <p className="font-light text-base mb-3">
            Dive into unique trip itineraries crafted by our global travelers.
            Find your next adventure and share your own journey with fellow
            explorers.
          </p>
        </div>
        <div>
          <img src="/temp.png" alt="" />
        </div>
      </section>
    </Container>
  );
}
