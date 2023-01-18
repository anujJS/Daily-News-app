import React from 'react';

const NewsItem = ({ tittle, descripition, imageUrl, newsUrl, author, date }) => {
   
        return (
            <div>
                <div className="card" >
                    <img src={!imageUrl ? "https://images.hindustantimes.com/img/2022/10/25/550x309/UKRAINE-CRISIS-KHARKIV-REGION-1_1666711897574_1666711897574_1666711929446_1666711929446.JPG" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{descripition}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author}  on {date}</small></p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem ;