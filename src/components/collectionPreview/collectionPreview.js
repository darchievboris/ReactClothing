import './collectionPreview.scss'
import CollectionItem from "../collectionItem/collectionItem";
import  React from 'react'

const PreviewCollection = ({title, items, id}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map(({id,...otherCollectionItemProps}) => (
                    <CollectionItem key={id} {...otherCollectionItemProps}></CollectionItem>
                ))}
        </div>
    </div>
)

export default PreviewCollection