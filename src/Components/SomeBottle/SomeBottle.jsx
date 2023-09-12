import './SomeBottle.css'

const SomeBottle = ({bottle,handleBottle}) => {
    const {name,img,price,ratings,seller}=bottle;
    return (
        <div className="bottle">
            <h2>Name: {name}</h2>
            <img src={img} alt="" />
            <h3>Price: {price}</h3>
            <h4>Rating: {ratings}</h4>
            <h5>Seller name: {seller}</h5>
            <button className='bottle-btn' onClick={() =>handleBottle(bottle)}>Purchase</button>
        </div>
    );
};

export default SomeBottle;