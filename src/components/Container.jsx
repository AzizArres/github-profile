import React from "react"
import Box from "./Box.jsx"

export default function Container(){

    const [user, setUser] = React.useState("")
    const [data, setData] = React.useState({})

    function handleChange(event){
        setUser(event.target.value)
    }

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    },[user])

    return(
        <div className="container">
            <div className="username">
                <img src="src/assets/Search.svg" alt="" />
                <input type="text" placeholder="username" onChange={handleChange} />
            </div>            
            <div className="main-section">
               
                <div className="header">
                    <img src="src/assets/github-mark-white.png" className="github-logo" alt="" /> 
                    <div>
                        <p className="title" >Followers</p>
                        <p className="separation" >|</p>
                        <p className="response">{data.followers}</p>
                    </div>
                    <div>
                        <p className="title" >Following</p>
                        <p className="separation" >|</p>
                        <p className="response" >{data.following}</p>
                    </div>
                    <div>
                        <p className="title" >Location</p>
                        <p className="separation" >|</p>
                        <p className="response" >San Francisco, CA</p>
                    </div>
                </div>
                <div className="main-titles">
                    <h2>GitHub</h2>
                    <p>How people build software</p>
                </div>
                <div className="page">
                    <Box 
                        boxTitle=".github"
                        boxDescription="Community health files for the @GitHub organization"
                        boxNesting="2,369"
                        boxStar="703"
                        boxUpdate="4"
                    />
                    <Box 
                        boxTitle="accessibility-alt-text-bot"
                        boxDescription="An action to remind users to add alt text on Issues, Pull Requests, and Discussions"
                        boxNesting="7"
                        boxShield="true"
                        boxStar="50"
                        boxUpdate="3"
                    />
                    <Box 
                        boxTitle="accessibilityjs"
                        boxDescription="Client side accessiblity error scanner."
                        boxSheild="True"
                        boxNesting="72"
                        boxStar="2181"
                        boxUpdate="4"
                    />
                    <Box 
                        boxTitle="actions-cheat-sheet"
                        boxDescription="A cheat sheet for GitHub Actions"
                        boxShield="MIT"
                        boxNesting="26"
                        boxStar="194"
                        boxUpdate="4"
                    />
                </div>
                <div className="footer">
                    <a href="#">View all repositories</a>
                </div>
            </div>
        </div>
    )
}