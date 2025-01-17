import ParticlesBg from "particles-bg";

function Particles() {
  let config = {
    num: [1, 3],
    rps: 0.5,
    radius: [50, 100],
    life: [1.5, 3],
    v: [0.2, 0.5],
    tha: [-40, 40],
    alpha: [2, 1],
    scale: [0.1, 0.4],
    position: "all",
    color: ["#2F3A8F", "#fe7e6d"],
    cross: "dead",
    random: 15,
  };

  return (
    <>
      <ParticlesBg type="custom" config={config} bg={true} />
    </>
  );
}

export default Particles;
