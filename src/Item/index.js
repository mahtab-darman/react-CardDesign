import './style.css';


const Item = ()=>{
    const NumArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return (
    <section>
        {NumArray.map((element)=>(
            <div className='item'>
                <input type="text" key={element} defaultValue={`کار ${element}`} />
                <i>X</i>
            </div>
        ))}
    </section>
    );
};

export default Item