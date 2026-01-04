import { faInfoCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SUBMIT_INFO = [
  {
    label: "Review all information for accuracy",
  },
  {
    label: "Ensure your contact details are correct",
  },
  {
    label: "Our team will review your application within 5-7 business days",
  },
  {
    label: "You'll be contacted if you are accepted",
  },
];

export default function FormInfoCard() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
      <div className="flex items-start gap-2">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="text-blue-600 text-xl shrink-0"
        />

        <div className="space-y-2.5">
          <p className="font-semibold text-gray-900 text-sm">
            Before you submit:
          </p>
          <ul className="text-sm text-gray-700 space-y-2 pl-5 list-disc marker:text-blue-500">
            {SUBMIT_INFO.map((info, idx) => (
              <li key={idx}>{info.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
