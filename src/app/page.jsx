import Image from "next/image";
import { homeImage } from "./assets";

export default function Home() {
  return (
    <main className="grid">
      {/* <img
        className="even"
        src="https://picsum.photos/id/379/700/400"
        alt="The road to nowhere image"
      /> */}

      <Image
        className="even"
        src={homeImage}
        alt="The road to nowhere image"
        width={700}
        height={320}
      />
      <div className="even">
        <h2>Let's travel!!</h2>
        <p>
          Welcome to my travel blog! Join me as I embark on an incredible
          journey around the world, exploring diverse cultures, breathtaking
          landscapes, and hidden gems. Through my stories and photos, you'll get
          a glimpse of the adventures and experiences that make each destination
          unique. Whether it's hiking through mountains, savoring local
          cuisines, or meeting amazing people, there's always something exciting
          to share. Follow along and be inspired to discover the beauty and
          wonder that our world has to offer. Let's explore together and create
          unforgettable memories!
        </p>
      </div>
    </main>
  );
}
