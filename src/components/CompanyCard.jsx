import {
  FaClipboardList,
  FaBox,
  FaFileAlt,
  FaBook,
} from "react-icons/fa";

const iconMap = {
  clipboard: FaClipboardList,
  box: FaBox,
  file: FaFileAlt,
  book: FaBook,
};

export default function CompanyCard({ company }) {
  const Icon = iconMap[company.icon];

  const handleClick = () => {
    window.location.href = company.url;
  };

  return (
    <div className="company-card" onClick={handleClick}>
      <Icon
        className="company-icon"
        style={{ color: company.color }}
      />

      <h3>{company.name}</h3>

      <p>{company.description}</p>
    </div>
  );
}