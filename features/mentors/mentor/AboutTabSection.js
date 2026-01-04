import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutTabLists from "./AboutTabLists";

export default function AboutTabSection({ mentor }) {
  const { bio } = mentor;

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{bio}</p>
      </div>

      <AboutTabLists mentor={mentor} />

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect</h2>
        <div>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center hover:bg-stone-300 transition-colors duration-300 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-600 w-5! h-5!"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
