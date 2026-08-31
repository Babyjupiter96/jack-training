import { asset } from "@/lib/base";

/** David's Coronation of Napoleon, very faint, behind the hero copy. */
export function HeroPlate() {
  return (
    <div className="hero__plate" aria-hidden="true">
      <img
        src={asset("/media/napoleon-coronation.jpg")}
        alt=""
        loading="eager"
      />
    </div>
  );
}
