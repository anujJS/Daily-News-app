import React, {useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props) => {
   const [articles, setArticles]= useState([])
  
   const [loading, setLoading]= useState(false)
   const [page, setPage]= useState(1)
   const [totalResults, setTotalResults]= useState(0)



const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const   updateNews= async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(()=>{
        updateNews()
    }, [])
    
   
  const  fectchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
        setLoading(true)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setLoading(false)

       
    };

    
        return (
            <div className='container my-3' >
                <h1 className='text-center' style={{margin:"45px 0"}}>Top  {capitalizeFirstLetter(props.category)} Headlines </h1>
                {loading && <Spiner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fectchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spiner />}
                >
                    <div className='container'>
                        <div className='row'>
                            {articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    < NewsItem tittle={element.title} descripition={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>

                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </div >
        )
    }


News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "sports"
}

 News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News;