import { useLoaderData } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoriesNews = () => {
    const {data: news} = useLoaderData();
    

    return (
        <div>
            <h1 className="pb-3">Dragon News Home</h1>
            <div>
                {
                    news.map(singleNews=>(<NewsCard key={singleNews._id} news={singleNews}></NewsCard>))
                }
            </div>
        </div>
    );
};

export default CategoriesNews;