import Image from "next/image";
import butterflyWing from "@/public/butterfly.svg";

function Butterfly() {
  return (
    <div className="butterfly">
      <Image
        src={butterflyWing}
        className="butterfly-wing animate-flap object-contain"
      />
      <div className="flip-x">
        <Image
          src={butterflyWing}
          className="butterfly-wing animate-flap object-contain"
        />
      </div>
    </div>
  );
}

export default Butterfly;
