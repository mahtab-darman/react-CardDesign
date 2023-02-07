import './style.css';


const Item = ()=>{
    const NumArray = [
        'کار 1',
        "کار 2",
        "کار 3",
        "خیلیییی خیلیییییی خیلییییییی خیلییی",
        "کار 5",
        "کار 6",
        "کار 7",
        "کار 8",
        "کار 9",
        "کار 10"
    ];

    return (
    <section>
        {NumArray.map((element)=>(
            <div className='item'>
                <input type="text" key={element} defaultValue= {element} />
                <i>X</i>
            </div>
        ))}
    </section>
    );
};

export default Item