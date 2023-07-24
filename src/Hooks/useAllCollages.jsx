import { useQuery } from "@tanstack/react-query";

const useAllCollages = () => {

    const { data: collages = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['collages'],
        queryFn: async () => {
            const res = await fetch("https://edtech-university-application-server.vercel.app/all-collages")
            return res.json()
        }
    })
    return [collages, loading, refetch]


}

export default useAllCollages;
