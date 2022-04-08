import './UpdatePage.css'
import {useState} from "react";
import {Link} from "react-router-dom";

export default function UpdatePage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [gender, setGender] = useState('');
    const [photo, setPhoto] = useState('');
    const [pdfFile, setPdfFile] = useState('');
    let url = 'http://intern-2022.arpify.com/form';

    let handleClick = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'message': 'User crated successfully',
                'userFullName': 'Lavrentin Sargsyan',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                birthDay: birthDay,
                gender: gender,
                photo: photo,
                pdfFile: pdfFile,
            })
        });
    }

    return (
        <div className='formBloc'>

            <div className='click2'>
                <Link to="/Api">
                    <button className='clickHome'>Home</button>
                </Link>
            </div>

            <form>

                <label>firstName</label>
                <input onChange={e => setFirstName(e.target.value)} type="text" placeholder='name'/>

                <label>lastName</label>
                <input onChange={e => setLastName(e.target.value)} type="text" placeholder='surname'/>

                <label>birthDay</label>
                <input onChange={e => setBirthDay(e.target.value)} type="number" placeholder="1992-10-18"/>

                <label>gender</label>
                <input onChange={e => setGender(e.target.value)} type="text" placeholder='gender'/>

                <label>photo</label>
                <input onChange={e => setPhoto(e.target.value)} type="file" name="PHOTO"/>

                <label>pdfFile</label>
                <input onChange={e => setPdfFile(e.target.value)} type="file" name="PDF"/>

                <div className='click2'>
                    <button onClick={handleClick}>Send</button>
                </div>

            </form>
        </div>
    )
}