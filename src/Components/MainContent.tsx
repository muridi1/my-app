import Places from "./Places";

function MainContent(): JSX.Element {
    return (
      <main>
       
        <Places
          title= {"Home is where the heart is"}
          placeName= {"London"}
          countryName= {"England"}
          text= {"Capital city of the UK"}
        />
        
      </main>
    );
  }
  
  export default MainContent;