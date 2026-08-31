import { asset } from "@/lib/base";

/**
 * The wounded-warrior marble behind the hero — the same near-black plate
 * treatment as the Perseus/Medusa plate on the Forge site.
 */
export function HeroPlate() {
  return (
    <div className="hero__plate" aria-hidden="true">
      <img src={asset("/media/hero-figure.jpg")} alt="" loading="eager" />
    </div>
  );
}
