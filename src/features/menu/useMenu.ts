import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";

export function useMenu() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
    staleTime: 1000 * 10,
  });

  return { data, isLoading, error };
}
