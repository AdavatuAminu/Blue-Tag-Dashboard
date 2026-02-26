import Layout from "../components/Layout";
import CompanyCard from "../components/CompanyCard";
import companies from "../data/companies";

export default function Home() {

  return (

    <Layout>

      <div className="company-grid">

        {companies.map(company => (

          <CompanyCard
            key={company.id}
            company={company}
          />

        ))}

      </div>

    </Layout>

  );
}