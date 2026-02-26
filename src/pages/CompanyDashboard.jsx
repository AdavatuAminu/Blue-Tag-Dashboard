import { useParams } from "react-router-dom";
import companies from "../data/companies";

export default function CompanyDashboard() {
  const { id } = useParams();

  const company = companies.find(
    (c) => c.id === id
  );

  if (!company) return <div>Company not found</div>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{company.name} Dashboard</h1>
    </div>
  );
}