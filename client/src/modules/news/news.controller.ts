import { NewsList, Empty } from "../../../../generated/proto/news_pb";

function getNews( client:any){
    const request = new Empty();
    client.getNews(request, (err, response: NewsList) => {
        if(err){
            throw err;
        } 
        
        console.log('all news', response.getNewsList());
    })
}

const News = {
    getNews
};

export default News;
