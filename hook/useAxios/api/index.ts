import { useEffect, useState } from "react";

const useFetch = <T>(fetchFuction: () => Promise<T>, autoFetch = true) => {
  const [data, setdata] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFuction();
      setdata(result);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error occured"));
    } finally {
      setLoading(false);
    }
  };
  const reset = () => {
    setdata(null);
    setLoading(false);
    setError(null);
  };
  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);
  return { data, loading, error, refetch: fetchData, reset };
};
export default useFetch;
// import api from "./api";
// interface PropsType {
//   url?: string;
//   method: "GET" | "DELETE" | "PUT" | "POST" | "PATCH";
//   params?: object;
//   headers?: object;
//   body?: object;
// }

// export const useAxios = () => {
//   const response = async ({
//     url,
//     headers,
//     params,
//     method = "GET",
//     body,
//   }: PropsType) => {
//     try {
//       const { data } = await api({
//         url: `${import.meta.env.VITE_BASE_URL}${url}`,
//         data: body,
//         method,
//         params: {
//           ...params,
//         },
//         headers,
//       });
//       return data;
//     } catch (error) {
//       console.log("Api xatosi", error);
//       return Promise.reject(error);
//     }
//   };
//   return response;
// };
