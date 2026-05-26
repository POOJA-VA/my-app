import { useInvoiceMaster } from "../hooks/useInvoiceMaster";

const Dashboard = () => {
  const { data, isLoading, error } = useInvoiceMaster();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      <h1>Invoice Master</h1>
    </div>
  );
};

export default Dashboard;
