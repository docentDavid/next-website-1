import Image from "next/image";
import { contactImage } from "../assets";

const Contact = () => {
  return (
    <main className="grid">
      {/* <img
        className="even"
        src="https://picsum.photos/id/374/700/400"
        alt="Rough coast image"
      /> */}
      <Image
        className="even"
        src={contactImage}
        alt="Rough coast image"
        width={700}
        height={320}
      />
      <div className="even">
        <h2>Wanna join me?</h2>
        <p>
          If you're looking for an adventure buddy, let's connect and explore
          the world together! Whether it's hiking through the Andes, relaxing on
          a tropical beach, or discovering hidden gems in bustling cities, I'm
          always up for an exciting journey. Traveling with a companion makes
          the experience even more memorable, and I'm eager to share these
          moments with someone who loves adventure as much as I do. So, if
          you're ready to create unforgettable memories and embark on incredible
          trips, don't hesitate to reach out. Let's plan our next adventure and
          make it a trip of a lifetime!
        </p>
      </div>
    </main>
  );
};

export default Contact;
