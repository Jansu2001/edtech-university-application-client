import { useQuery } from "@tanstack/react-query";

const useAllCollages = () => {

    const { data: collages = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['collages'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/all-collages")
            return res.json()
        }
    })
    return [collages, loading, refetch]


}

export default useAllCollages;
