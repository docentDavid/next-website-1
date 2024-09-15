import Image from "next/image";
import { aboutImage } from "../assets";

const About = () => {
  return (
    <main className="grid">
      <div className="odd">
        <h2>About my travels</h2>
        <p>
          My vacation in Peru was an unforgettable adventure! I started in Lima,
          exploring its vibrant culture and delicious cuisine. Then, I journeyed
          to Cusco, the historic capital of the Inca Empire, where I marveled at
          the stunning architecture and rich history. The highlight was
          undoubtedly my trek to Machu Picchu, where the breathtaking views left
          me in awe. I also visited the Sacred Valley, immersing myself in the
          serene landscapes and traditional markets.
        </p>
      </div>
      <Image
        className="odd"
        src={aboutImage}
        alt="Traffic around Titicaca lake image"
        width={700}
        height={320}
      />
      {/* <img
        className="odd"
        src="https://picsum.photos/id/371/700/400"
        alt="Traffic around Titicaca lake image"
      /> */}
    </main>
  );
};

export default About;
