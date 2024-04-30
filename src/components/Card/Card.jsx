import Tag from "../Tag/tag"

export default function Card(props) {
    const item = props.item
    
    return (
        <div className="card">
            <h2>{item.name}</h2>
    
            <div className="tags">
                {item.tags?.map(function (tag) {
                    return <Tag text={tag} />
                })}
            </div>
    
            <img src={item.image} />
        </div>
        )
}
