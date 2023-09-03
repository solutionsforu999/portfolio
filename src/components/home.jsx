import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import giphy from '../images&gifs/giphy.gif';
import linkedin from '../images&gifs/linkedin.JPG';
const Home = () => {
    const [role, setRole] = useState('');
    let [position, setPosition] = useState(0);
    let [text, setText] = useState('');
    const navigateTo = useNavigate();
    useEffect(() => {
        const txt = 'Full Stack Developer';
        const intervalId = setInterval(() => {
            if (txt.length > position) {
                setText(text + txt[position]);
                setRole(`${text}|`);
                setPosition(position + 1);
            } else if (position === txt.length) {
                setText('');
                setRole(`${text}|`);
                setPosition(0);
            }
        }, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, [position]);

    return (
        <>
            <div className='container d-flex justify-content-center flex-wrap'>
                <div className='desc flex-grow-1'>
                    <h2>Hello, <span>👋🏻</span></h2>
                    <h2 id='myname'>I'm Abdellatif BENCHADA</h2>
                    <h2>{role}</h2>
                    <div>
                        <img style={{ cursor: 'pointer' }} src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/abdellatif-benchada-370085260/')} width='10%' alt={linkedin} />

                    </div>
                </div>
                <div className='homeimage'>
                    <img src={giphy} width='100%' alt='developer gif' />
                </div>
            </div>
            <div className='d-flex justify-content-center pt-2'>
                <button className="cta" onClick={() => navigateTo('/about')}>
                    <span className="spanbtx">NEXT</span>
                </button>
            </div>

        </>
    );
}
export default Home;
