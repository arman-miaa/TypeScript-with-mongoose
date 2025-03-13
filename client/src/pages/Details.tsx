import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router"



interface CardData {
    _id: string,
    title: string,
    date:string,
}

function Details() {
    const {id} = useParams<{id: string}>();
  

    const cardDetails = async ():Promise<CardData> => {
        const response = await axios(`http://localhost:5000/api/card/${id}`);

        if (!response.data) throw new Error("card detais failed")
            return response.data.data;
    }
    

    const { data,isLoading,isError,error } = useQuery<CardData>({
        queryKey: ["cards",id],
        queryFn: cardDetails,
        enabled: !!id,
    })

   

    if (isLoading) return <p>Loading...</p>
    if(isError) return <p>Error: {error.message}</p>

  return (
      <div className="flex justify-center items-center flex-col mt-8">
         
          <h1>{data?.title}</h1>
          <p>{ data?._id}</p>
          <p>{ data?.date}</p>
         
    </div>
  )
}

export default Details