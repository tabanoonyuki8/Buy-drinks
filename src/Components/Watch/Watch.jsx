

const Watch = ({watch}) => {
    const {name,price}=watch;
    return (
        <div>
      <h4>Name: {name}</h4>
      <h5>Price: {price}</h5>
        </div>
    );
};

export default Watch;