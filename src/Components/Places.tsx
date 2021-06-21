interface PlacesProps {
    title: string;
    placeName: string;
    countryName: string;
    image: string;
    mapLink: string;
    funFact: string;
  }
  
  function Places (props: PlacesProps): JSX.Element {
    return (
      <section>
          <img src={props.image} alt={props.title}/>
          <a href= {props.mapLink}>google map link</a>
        <h2>{props.title}</h2> 
        <h3>{props.placeName}, {props.countryName}</h3>
        <p>
          {props.funFact}
        </p>
      </section>
    );
  }
  
  export default Places;
  