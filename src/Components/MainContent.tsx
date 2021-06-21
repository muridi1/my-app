import Places from "./Places";
import istanbul from "./Images/istanbul.jpg"
import oman from "./Images/oman.jpg"
import bali from "./Images/bali.jpg"
import kuala from "./Images/kuala.jpg"
import krabi from "./Images/krabi.jpg"
import singapore from "./Images/singapore.jpg"

function MainContent(): JSX.Element {
    return (
      <main>
        <h1>2020</h1>
        <Places
          image= {istanbul}
          title= {"My last travel before lockdown 😢"}
          mapLink= {"https://www.google.com/maps/place/%C4%B0stanbul,+Turkey/@41.0039643,28.4517462,9z/data=!4m5!3m4!1s0x14caa7040068086b:0xe1ccfe98bc01b0d0!8m2!3d41.0082376!4d28.9783589"}
          placeName= {"Istanbul"}
          countryName= {"Turkey"}
          funFact= {"Did you know that Istanbul is on two continents."}
        />
        <Places
          image= {oman}
          title= {"One of the most naturally stunning countries I have ever been to"}
          mapLink= {"https://www.google.com/maps/place/Muscat,+Oman/@23.5825735,58.1443239,10z/data=!3m1!4b1!4m5!3m4!1s0x3e91ffa8879aafc9:0xdb53876d0d79a72c!8m2!3d23.5880307!4d58.3828717"}
          placeName= {"Muscat"}
          countryName= {"Oman"}
          funFact= {"Oman has the longest serving ruler in the Middle East."}
        />
        <h1>2019</h1>
        <Places
          image= {singapore}
          title= {"Formula one"}
          mapLink= {"https://www.google.com/maps/place/Singapore/@1.3139961,103.7038212,11z/data=!3m1!4b1!4m5!3m4!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836"}
          placeName= {"Singapore"}
          countryName= {"Singapore"}
          funFact= {"Singapore pioneered the first F1 night race."}
        />
        <Places
          image= {kuala}
          title= {"Nasi Goreng"}
          mapLink= {"https://www.google.com/maps/place/Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia/@3.1385035,101.6167776,12z/data=!3m1!4b1!4m5!3m4!1s0x31cc49c701efeae7:0xf4d98e5b2f1c287d!8m2!3d3.139003!4d101.686855"}
          placeName= {"Kuala Lumpur"}
          countryName= {"Malaysia"}
          funFact= {"Malaysia has a unique rotating monarchy system, in which nine ethnic Malay state rulers take turns as king for five-year terms."}
        />
        <Places
          image= {bali}
          title= {"The country that has monetised everything"}
          mapLink= {"https://www.google.com/maps/place/Bali/@-8.4556955,114.5097055,9z/data=!3m1!4b1!4m5!3m4!1s0x2dd22f7520fca7d3:0x2872b62cc456cd84!8m2!3d-8.3405389!4d115.0919509"}
          placeName= {"Bali"}
          countryName= {"Indonesia"}
          funFact= {"Most expensive coffee: Kopi Luwak."}
        />
        <Places
          image= {krabi}
          title= {"Island hopping is the best!"}
          mapLink= {"https://www.google.com/maps/place/Krabi,+Thailand/@8.039663,98.4321005,9z/data=!3m1!4b1!4m9!1m2!2m1!1skrabi!3m5!1s0x30518d792d7f9309:0x10223bc2c364c90!8m2!3d8.0862997!4d98.9062835!15sCgVrcmFiaZIBFGFkbWluaXN0cmF0aXZlX2FyZWEx"}
          placeName= {"Krabi"}
          countryName= {"Thailand"}
          funFact= {"Thailand is a constitutional monarchy, much like England."}
        /> 
      </main>
    );
  }
  
  export default MainContent;