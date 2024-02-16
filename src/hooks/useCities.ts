import { useApi } from "@/hooks/useApi";

export const useCities = () => {
  const apiUser = process.env.NEXT_PUBLIC_GEO_NAMES_USER;
  const url = `${process.env.NEXT_PUBLIC_GOE_API}/countryInfoJSON?formatted=true&lang=en&username=${apiUser}`;
  const { data, error, loading } = useApi(url);

  return { data, error, loading };
};
