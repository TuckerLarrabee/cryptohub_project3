import React, {useEffect, useState} from 'react';
import axios from 'axios';


export const News = () => {
    const [list, setList] = useState(null);

    // const testApi = async () => {
    //   console.log("CLICK WORKED")
    //   await fetch('https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20')
    //   .then(response => {
    //     console.log(response.json())
    //     return response.json()
    //   })
    //   .then(data => {
    //     setList(data)
    //   });
    // }

    // const getList = () => {
    //   console.log('CLICK WORKED')
    //   return fetch('https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20')
    //     .then(data => data.json())
    // }
    
    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20")
          .then(
          (response) => {
            setList(response.data);
            console.log(response.data);
          }
        );
      }, []);

      const renderNewsItems = () => {
        if(list) {
          return list.news.map(e => renderNewsItem(e, e.id));
        }
      }

      const renderNewsItem = (article, id) => {
        return <li key={id}><a href={`${article.shareURL}`}>{article.title}</a></li>
      }

    return (
        <div className="news">
            <div class="news-items">
              {renderNewsItems()}
            </div>
        </div>
    );
};


// .App {
//     width: 100%;
//     max-width: 700px;
//     margin: 0 auto;
//   }
  
//   .App-title {
//     text-align: center;
//   }
  
//   .text-input {
//     width: 100%;
//     border: 1px solid #f7f7f7;
//     padding: 10px;
//   }
  
//   .text-input:hover {
//     box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.25);
//   }
  
//   .news-items {
//     list-style: none;
//     padding-left: 0;
//   }
  
//   .news-items li {
//     margin-bottom: 10px;
//   }