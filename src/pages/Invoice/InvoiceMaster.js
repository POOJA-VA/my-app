import "./InvoiceMaster.css";

const InvoiceMaster = () => {
  return (
    <div className="invoice-page">
      <div className="breadcrumb">
        Home / Reports / <span>Invoice Master</span>
      </div>

      <div className="page-header">
        <h2>Invoice Master</h2>
      </div>

      <div className="location-section">
        <label>Location</label>

        <select>
          <option>ALL</option>
          <option>None</option>
        </select>
      </div>
    </div>
  );
};

export default InvoiceMaster;
