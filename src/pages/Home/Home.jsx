

import FavoriteBook from './FavoriteBook'


import PromoBanner from './PromoBanner'


import { useLoaderData } from 'react-router-dom'
import CategoryCard from './CategoryCard'

import BannerCard from './BannerCard'
import LibraryStatistics from '../front-page/LibraryStatistics'
import NewsletterSubscription from '../front-page/NewsletterSubscription'
import FAQ from '../front-page/FAQ'
import UpcomingEvents from '../front-page/UpcomingEvents'
import ReadingRecommendations from '../front-page/Recomend'
import OnlineCatalog from '../front-page/Online'
import AboutPage from '../about/About'



export const Home = () => {
  const categories = useLoaderData();
  const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));
  return (
    <div>
<BannerCard></BannerCard>

      
 <h2 className="text-4xl my-12 font-bold text-center">Books Category</h2>
            <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-16 gap-8 my-4 py-10 ml-24 text-center '>
            {
              uniqueCategories.map((category, index)=> 
          <CategoryCard key={index} category={category} />
        )
        }

   
</div>



      <LibraryStatistics>

      </LibraryStatistics>
      <NewsletterSubscription></NewsletterSubscription>
      <FAQ></FAQ>
      <UpcomingEvents></UpcomingEvents>
      <AboutPage></AboutPage>
      {/* <Testimonials></Testimonials>
       */}
    
   
  
     
    </div>
  )
}
