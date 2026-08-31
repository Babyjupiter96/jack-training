import { asset } from "@/lib/base";

/**
 * David's "Coronation of Napoleon" behind the hero — Napoleon crowning
 * himself. Pushed near-black, same signature treatment as the Forge plate.
 */
export function HeroBackdrop() {
  return (
    <div className="hero__backdrop" aria-hidden="true">
      <img
        src={asset("/media/napoleon-coronation.jpg")}
        alt=""
        loading="eager"
      />
    </div>
  );
}
