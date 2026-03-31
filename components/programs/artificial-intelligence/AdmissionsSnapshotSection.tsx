import Link from "next/link";
import { useState } from "react";
import BrochurePopup from "../../shared/BrochurePopup";

// Download Brochure Button with Popup
function DownloadBrochureButton() {
  const [showPopup, setShowPopup] = useState(false);
  const courseName = "MBA in Artificial Intelligence";
  const brochurePath = "/pdfs/MBA in Artificial Intelligence.pdf";
  return (
    <>
      <button
        type="button"
        className="border-2 border-booth-maroon bg-white text-booth-maroon px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm md:text-base"
        onClick={() => setShowPopup(true)}
      >
        Download Brochure
      </button>
      {showPopup && (
        <BrochurePopup
          courseName={courseName}
          onClose={() => setShowPopup(false)}
          brochurePath={brochurePath}
        />
      )}
    </>
  );
}

export default function AdmissionsSnapshotSection() {
  return (
    <section className="py-8 md:py-20 bg-booth-bg-gray">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-6 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
            Admissions Snapshot
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
            <strong className="font-trade-gothic-bold">
              Limited Intake Only:
            </strong>{" "}
            Seats are limited to maintain quality and a rigorous, hands-on
            learning environment.
          </p>
          <div>
            <h3 className="text-xl md:text-2xl font-trade-gothic-bold text-booth-dark-gray mb-4">
              Key Admissions Criteria
            </h3>
            <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
              <li className="flex items-center gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Academic Record:</strong> Strong quantitative and
                  analytical foundation
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Entrance Test:</strong> Valid CAT / MAT / CMAT /
                  TANCET scores
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Personal Statement:</strong> Clear interest in AI,
                  data, and analytics
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Group Discussion:</strong> Participation and clarity
                  of thought
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-booth-maroon mt-1">•</span>
                <span>
                  <strong>Personal Interview:</strong> Demonstrated reasoning
                  ability and program fit
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Download Brochure Popup Button */}
            {typeof window !== "undefined" && <DownloadBrochureButton />}
            <Link
              href="/request-information"
              className="border-2 border-booth-maroon bg-white text-booth-maroon px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm md:text-base"
            >
              Book Counselling
            </Link>
            <Link
              href="https://admissions.rvscas.ac.in?id=69b938da3944a9a8e9823781&leadform=RVSCAS_MBA_Website"
              className="border-2 border-booth-maroon bg-white text-booth-maroon px-6 py-3 md:px-8 md:py-4 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm md:text-base"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
