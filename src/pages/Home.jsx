import companies from "../data/companies";
import CompanyCard from "../components/CompanyCard";
import DashboardHeader from "../components/DashboardHeader";

export default function Home() {
  return (
    <div className="dashboard-container">

      <DashboardHeader />

      <div className="company-grid">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
          />
        ))}
      </div>

    </div>
  );
}