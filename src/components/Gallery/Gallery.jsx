
import "./Gallery.css"
import portfolio1 from '../../assets/img/portfolio/1.jpeg'
import portfolio2 from '../../assets/img/portfolio/2.jpeg'
import portfolio3 from '../../assets/img/portfolio/3.jpeg'
import portfolio4 from '../../assets/img/portfolio/4.jpeg'
import portfolio5 from '../../assets/img/portfolio/5.jpeg'
import portfolio6 from '../../assets/img/portfolio/6.jpeg'

const Gallery = () => (
   <>
      <div class="tiles">
         <a class="tile" href="#"><img src={portfolio1} />
            <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
         </a>       
         <a class="tile" href="#"><img src={portfolio2} />
            <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
         </a>
         <a class="tile" href="#"><img src={portfolio3} />
            <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
         </a>
         <a class="tile" href="#"><img src={portfolio4} />
            <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
         </a>
         <a class="tile" href="#"><img src={portfolio5} />
            <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
         </a>
         <a class="tile" href="#"><img src={portfolio6} />
            <div class="details"><span class="title">Lorem Ipsum Dolor</span><span class="info">Quisque vel felis lectus donec vitae dapibus magna</span></div>
         </a>
         </div>
   </>
);

export default Gallery;
