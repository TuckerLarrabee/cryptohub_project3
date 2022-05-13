import * as React from 'react';
import axios from 'axios';


export const Exchanges = () => {
    const [list, setList] = React.useState(null);
    
    React.useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/exchanges")
          .then(
          (response) => {
            setList(response.data);
            console.log(response.data);
          }
        );
      }, []);

      const renderNewsItems = () => {
        if(list) {
          return list.supportedExchanges.map((e, i) => renderNewsItem(e, i));
        }
      }

      const renderNewsItem = (item, id) => {
        return <li key={id}>{item}</li>
      }

    return (
        <div className="news">
          <div><h1>Exchanges</h1></div>
            <style jsx>{`
              .news-items {
                    list-style: none;
                    padding-left: 0;
                    font-size: 12px;
                    height: 100%;
                    width: 100%;
                    text-align: center;
                  }
             .news-items li {
                margin-bottom: 10px;
             }
            `}</style>
            <div class="news-items">
              {renderNewsItems()}
            </div>
        </div>
    );
};