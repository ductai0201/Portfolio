import { useEffect, useState } from "../lib";

const CounterSite = () => {
    const [counters, setCounter] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/counter")
          .then((Response) => Response.json())
          .then((data) => setCounter(data));
      },[]);
  return `<section class="site-section section-counters text-center">
    <div class="container">
        <div class="row">
            ${counters.map((counter)=>{
                return `
                    <div class="col-sm-4 col-xs-12">
                    <p class="counter start counting" data-to="${counter.years}" data-speed="2000">${counter.years}</p>
                    <h4>${counter.yearsText}</h4>
                    </div>

                    <div class="col-sm-4 col-xs-12">
                    <p class="counter start counting" data-to="${counter.projects}" data-speed="2000">${counter.projects}</p>
                    <h4>${counter.projectsText}</h4>
                    </div>
                `
            })}
            
            <div class="col-sm-4 col-xs-12">
                <p id="infinity" class="counter" data-from="0" data-to="1" data-speed="1000">529</p>
                <h4>Seconds on this site!<br>What are you waiting for?</h4>
            </div>
        </div>
    </div>
</section>`;
};

export default CounterSite;
