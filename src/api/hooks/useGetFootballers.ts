import { useQuery } from "@tanstack/react-query";
import { footballerService } from "../services";

export const useGetFootballers = () => {
  return useQuery({
    queryKey: ["footballers"],
    queryFn: () => footballerService.getFootballers(),
    refetchOnWindowFocus: false,
  });
};
