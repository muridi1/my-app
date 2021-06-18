interface PlacesProps {
    title: string;
    placeName: string;
    countryName: string;
    //image: string;
    //mapLink: string;
    text: string;
  }
  
  function Places (props: PlacesProps): JSX.Element {
    return (
      <section>
        <h2>{props.title}</h2>
        <h3>{props.placeName}, {props.countryName}</h3>
        <p>
          {props.text}
        </p>
      </section>
    );
  }
  
  export default Places;
  