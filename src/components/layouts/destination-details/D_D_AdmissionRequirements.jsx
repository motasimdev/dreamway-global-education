
import {
  HiDocumentText,
  HiGlobeAlt,
  HiIdentification,
  HiDocument,
  HiUsers,
  HiCurrencyDollar,
  HiClipboardDocumentList,
  HiCheckBadge,
  HiHome,
  HiBanknotes,
} from "react-icons/hi2";
import Container from "../../Container";
import { FaPassport } from "react-icons/fa";

const iconMap = {
  transcript: HiDocumentText,
  academic: HiDocumentText,
  english: HiGlobeAlt,
  proficiency: HiGlobeAlt,
  ielts: HiGlobeAlt,
  pte: HiGlobeAlt,
  passport: HiIdentification,
  statement: HiDocument,
  purpose: HiDocument,
  sop: HiDocument,
  recommendation: HiUsers,
  reference: HiUsers,
  lor: HiUsers,
  financial: HiCurrencyDollar,
  bank: HiCurrencyDollar,
  fund: HiBanknotes,
  money: HiBanknotes,
  application: HiClipboardDocumentList,
  form: HiClipboardDocumentList,
  visa: FaPassport,
  document: HiClipboardDocumentList,
  letter: HiUsers,
  work: HiHome,
  experience: HiHome,
};

const DefaultIcon = HiCheckBadge;

const getIcon = (name) => {
  const lower = name.toLowerCase();
  for (const key in iconMap) {
    if (lower.includes(key)) {
      return iconMap[key];
    }
  }
  return DefaultIcon;
};

const D_D_AdmissionRequirements = ({ country }) => {
  const requirements = country?.admissionRequirements ?? [];

  if (!requirements.length) return null;

  return (
    <section className="bg-[#fffaf6] py-16 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 font-jost text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Admission Requirements
          </p>
          <h2 className="font-chivo text-3xl font-bold text-secondary md:text-4xl lg:text-[42px]">
            What You Need to Apply
          </h2>
          <p className="mt-4 font-jost text-base leading-7 text-secondary/70 md:text-lg">
            Prepare these essential documents to start your application journey.
          </p>
        </div>

        <div className="flex flex-wrap md:justify-center gap-4">
          {requirements.map((requirement) => {
            const Icon = getIcon(requirement);

            return (
              <span
                key={requirement}
                className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-6 py-3 font-jost text-sm md:text-lg lg:text-xl font-semibold text-secondary transition-all duration-300 hover:border-primary hover:text-primary"
              > 
                <Icon size={20} className="shrink-0" />
                {requirement}
              </span>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default D_D_AdmissionRequirements;
