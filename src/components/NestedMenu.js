import NormalMenu from "./NormalMenu"

const NestedMenu = ({nestedTitle, nestedCollection}) =>{
    return(
        <div className="pt-4">
                            <h4>{nestedTitle}</h4>
                            {
                                nestedCollection.map((category, index) =>
                                    <NormalMenu
                                     key={category?.title}
                                     title={category?.title} 
                                     filteredCollection={category?.itemCards}
                                     />
                                )
                            }
                        </div>
    )
}

export default NestedMenu