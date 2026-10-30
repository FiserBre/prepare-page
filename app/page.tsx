import Flork from "@/components/Flork";
import Sketch from "@/components/Sketch";
import Spot from "@/components/Spot";
import Site from "@/components/Site";
import Parallax from "@/components/Parallax";

export default function ComingSoon() {
  return (
    <>
      <main className="soon" id="obsah">
        <Parallax />
        {/* pen marks: one ring around the centred headline, spread evenly over
            the whole screen. Positions are percentages of the viewport, so the
            spacing holds at every size. Clockwise from the top left. */}
        <div className="soon__marks" aria-hidden="true">
          {/* top corners */}
          <Spot top="12%" left="7%" w={90} rotate={-12} show="always" depth={36} className="spot--intro spot--mark">
            <Sketch name="scribble" />
          </Spot>
          <Spot top="14%" right="8%" w={52} rotate={-18} show="always" depth={30} className="spot--intro spot--mark">
            <Sketch name="zigzag" />
          </Spot>
          {/* either side, level with the headline */}
          <Spot top="46%" left="6%" w={36} rotate={-10} show="desktop" depth={24} className="spot--intro spot--mark">
            <Sketch name="sparkle" />
          </Spot>
          <Spot top="46%" right="6%" w={40} rotate={12} show="desktop" depth={26} className="spot--intro spot--mark">
            <Sketch name="sparkle" />
          </Spot>
          {/* a star above the headline; on phones it moves to the bottom right corner */}
          <Spot top="24%" left="35%" w={64} rotate={14} show="desktop" depth={34} className="spot--intro spot--mark">
            <Sketch name="star" />
          </Spot>
          <Spot bottom="16%" right="8%" w={64} rotate={14} show="always" depth={34} className="spot--intro spot--mark spot--phone">
            <Sketch name="star" />
          </Spot>
          {/* bottom corners, above the footer line */}
          <Spot bottom="22%" left="8%" w={28} rotate={20} show="desktop" depth={32} className="spot--intro spot--mark">
            <Sketch name="bolt" />
          </Spot>
          <Spot bottom="22%" right="8%" w={120} rotate={-6} show="desktop" depth={28} className="spot--intro spot--mark">
            <Sketch name="ruler" />
          </Spot>
        </div>

        <div className="shell">
          {/* the headline, centred, with the hushing figure leaning in beside it */}
          <div className="soon__head">
            <div className="soon__center">
              <h1 className="soon__title px">
                <span className="soon__shh">
                  PSSSST
                  <Sketch name="bang" className="soon__bang" />
                </span>
                <span className="soon__line">
                  něco se tu{" "}
                  <span className="u-draw">
                    chystá
                    <Sketch name="underline" className="sketch--late" />
                  </span>
                </span>
              </h1>

              <div className="soon__side px">
                <div className="soon__psst">
                  <Flork name="psst" alt="Postavička s prstem na rtech: pssst" />
                  <Spot top="-4%" left="-30%" w={40} rotate={-10} show="always" depth={8} className="spot--intro">
                    <Sketch name="sparkle" />
                  </Spot>
                </div>
              </div>
            </div>
          </div>

          <Site />

          {/* footer: who is on the job, and where to write */}
          <footer className="soon__foot px">
            <Flork name="coffee" alt="Postavička v helmě s hrnkem kávy" />
            <p className="soon__foot-text">
              <span>
                Starý web od teď najdete na {" "}
                <a href="https://personal.fiserbretislav.com">personal.fiserbretislav.com</a>
              </span>
              <span className="soon__foot-sep" aria-hidden="true">
                ·
              </span>
              <a className="soon__mail" href="mailto:info@fiserbretislav.com">
                info@fiserbretislav.com
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
