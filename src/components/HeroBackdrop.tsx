import { asset } from "@/lib/base";

/** The Perseus/Medusa plate behind the hero — the shared signature treatment. */
export function HeroBackdrop() {
  return (
    <div className="hero__backdrop" aria-hidden="true">
      <img src={asset("/media/perseus-medusa.jpg")} alt="" loading="eager" />
    </div>
  );
}
