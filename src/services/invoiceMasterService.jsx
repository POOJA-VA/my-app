import ApiClient from "../api/apiClient";

export const fetchInvoiceMaster = () => {
  return ApiClient.get("invoice/invoice-master");
};
