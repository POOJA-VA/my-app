import { useQuery } from "@tanstack/react-query";
import { fetchInvoiceMaster } from "../services/invoiceMasterService";
import { queryKeys } from "../api/queryKeys";

export function useInvoiceMaster() {
  return useQuery({
    queryKey: [queryKeys.invoiceMaster],
    queryFn: fetchInvoiceMaster,
  });
}
