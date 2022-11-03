import Aside from "../../components/Aside";
import Main from "../../components/Main";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function MarketPlace () {
   const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher) 

   return (
      <>
         <Aside>
            <h1>Aside for MarketPlace</h1>
         </Aside>

         <Main>
            <h1>Use useSWR for client-side data fetching:</h1>
            {data && data.map(item => (
               <div key={item.id}>
                  <h3>ID: <strong>{item.id}</strong> --- Email: <strong>{item.email}</strong></h3>                  
               </div>
            ))}
         </Main>
      </>
   )
}