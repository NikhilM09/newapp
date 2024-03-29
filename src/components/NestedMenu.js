import NormalMenu from "./NormalMenu"
import { useState } from 'react'

const NestedMenu = ({nestedTitle, nestedCollection}) =>{
    const [nestedIndex, setNestedIndex] = useState(0);
    const handleShow = (val) =>{
        if(val===nestedIndex){
            setNestedIndex(-1)
        }
        else{
            setNestedIndex(val)
        }
    }


    return(
        <div className="pt-4">
                            <h4>{nestedTitle}</h4>
                            {
                                nestedCollection.map((category, index) =>
                                    <NormalMenu
                                     key={category?.title}
                                     title={category?.title} 
                                     filteredCollection={category?.itemCards}
                                     isNested={true}
                                     toggleNested={()=>handleShow(index)}
                                     showNestedList={nestedIndex===index}
                                     />
                                )
                            }
                        </div>
    )
}

export default NestedMenu