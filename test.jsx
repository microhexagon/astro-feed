const test = () => {
  // const pictureData = {
  //   id: "12345",
  //   name: "Cosmic Cliffs and the Carina Nebula",
  //   description:
  //     "A stunning image of the Carina Nebula, showcasing the beauty of cosmic cliffs.",
  //   url: "https://example.com/cosmic-cliffs.jpg",
  // };
  const pictureData = fetch("https://api.nasa.gov/planetary/apod?api_key=vuOnIKJzAowr9DUHAAbUuqq4IvWi3MRujPt6QSTW")
    .then(response => response.json());
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
    </div>
  );
};

export default test;
