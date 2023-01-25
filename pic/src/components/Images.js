import { useContext } from "react"
import { ImageContext } from "../App"
import Image from "./Image";
import Skeleton from "./Skeleton";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <><div className="flex justify-center">
       {/* <h1 className=" mt-6 text-2xl capitalize bg-gray-900 rounded-lg text-white w-1/4"> Results of {searchImage || 'Search'}</h1> */}
      <h1 className=" mt-6 text-1xl capitalize bg-gray-900 rounded-xl text-white w-auto inline-block min-h-min text-center py-2 pl-2 pr-2 "> Results of {searchImage || 'Search'}</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? <Skeleton item={10} /> : response.map((data, key) => <Image key={key} data={data} />)}
      </div>
      </>
  )
}

export default Images