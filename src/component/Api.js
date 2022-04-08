import {useState, useEffect} from "react";
import './StyleApi.css';
import {Link} from "react-router-dom";

export default function Api() {


    let [text, setText] = useState([''])
    let url = 'http://intern-2022.arpify.com/init'
    let name = "Lavrentin";
    let surname = "Sargsyan";
    let year = "1992-10-18";
    let gender = "male";

    let requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            firstName: name,
            lastName: surname,
            birthDay: year,
            gender: gender
        })
    };


    useEffect(() => {
        fetch(url, requestOptions)
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                setText(json)
            })
    }, [url,])


    return (
        <table className='table'>
            <thead>
            <tr>
                <th> Name:</th>
                <th> Surname:</th>
                <th>Gender:</th>
                <th> Age:</th>
                <th> Action:</th>
            </tr>
            </thead>
            <tbody>
            {text.map((texts, id) => {
                if (texts.firstName === "Lavrentin")
                    return <tr key={id}
                               className="currentUser">
                        <td >{texts.firstName}</td>
                        <td >{texts.lastName}</td>
                        <td >{texts.gender}</td>
                        <td >{texts.birthDay}</td>
                        <td > <Link to="/edit"><button className='clickUpdate'>Update Me</button></Link></td>
                    </tr>

                return <tr key={id} className="otherUser">
                    <td>
                        {texts.firstName}</td>
                    <td>
                        {texts.lastName}</td>
                    <td>
                        {texts.gender}</td>
                    <td>
                        {texts.birthDay}</td>
                    <td> </td>
                </tr>
            })}
            </tbody>
        </table>
    )
}

