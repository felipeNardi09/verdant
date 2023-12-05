import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postOrder } from "../../services/apiOrders";

export default function usePostOrder() {
  const queryClient = useQueryClient();

  const {
    mutate: createOrder,
    error,
    isPending,
  } = useMutation({
    mutationFn: postOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return { createOrder, error, isPending };
}
