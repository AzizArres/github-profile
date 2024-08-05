/* eslint-disable react/prop-types */
import React from "react"

export default function Box(props){
    return(
        <div className="box">
                        <h4>{props.boxTitle}</h4>
                        <p>{props.boxDescription}</p>
                        <div className="icons">
                            <div className="nesting">
                                <img src="src/assets/Nesting.svg" alt="" />
                                <p>{props.boxNesting}</p>
                            </div>
                            <div className="star">
                                <img src="src/assets/Star.svg" alt="" />
                                <p>{props.boxStar}</p>
                            </div>
                            <div className="shield">
                                {
                                    props.boxShield ? 
                                    <div>
                                        <img src="src/assets/Chield_alt.svg" />
                                        <p>MIT</p>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="update">
                                <p>updated {props.boxUpdate} days ago</p>
                            </div>
                        </div>
                    </div>
    )
}