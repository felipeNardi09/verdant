import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

export function useGetOrders() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    staleTime: 1000 * 10,
  });

  return { data, isLoading, error };
}
