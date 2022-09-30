import {Link} from "react-router-dom"

function FooterDataUp(props){
const {heading, to,p1, p2 ,p3, p4, p5, p6}=props;

    return (
        <div>
          
            <h4 >{heading}</h4>
         
            <hr/>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
            <p>{p5}</p>
            <p>{p6}</p>
        </div>
    )
}

export default FooterDataUp;