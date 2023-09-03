import { useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import marketplace from '../images&gifs/marketplace.JPG';
import processing from '../images&gifs/processing.gif';
import imdb from '../images&gifs/imdb.png';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
]
const Projects = () => {
    const [readyToplay, setReadyToplay] = useState(false);
    const videoPlayers = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [targetModal, settargetModal] = useState(0);
    const [projects, setProjects] = useState([{ title: 'REM Real Estate Project', img: processing, url: 'https://youtu.be/3TcRzbhE9Ec' }, { title: 'paper-scissor-rock game', img: processing, url: 'https://youtu.be/e1VFlA8XhQo' }, { title: 'Travel website', img: processing, url: 'https://youtu.be/8w-8tzpQBtk' }, { title: 'E-com Local Project', img: processing, url: 'https://youtu.be/45q3H4ZoQA8' }, { title: 'E-com Project', img: processing, url: 'https://youtu.be/wOgjl7r09aA' }, { title: 'MovieDb Project', img: imdb, url: 'https://youtu.be/-lZ7i4oFY6k' }]);
    const navigateTo = useNavigate();
    const carousel = useRef();
    const onPrevStart = (current, next) => {
        console.log('prev==>', current, next)
        carousel.current.goTo(carousel.current.props.children.length - 1);
        return
    }
    const onNextStart = (current, next) => {
        console.log('next==>', current, next)
        if (current.index === next.index) {
            carousel.current.goTo(0);
        }
        return
    }
    return (
        <>

            <Carousel ref={carousel} itemPosition={3} onPrevStart={onPrevStart} itemsToShow={1} onNextStart={onNextStart} enableMouseSwipe disableArrowsOnEnd={false}>

                {projects.map((project, ind) =>
                    [<div key={`project${ind}`} class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h6>{project.title}</h6>
                            </div>
                            <div class="flip-card-back">
                                {/* <i data-bs-toggle="modal" data-bs-target={`#exampleModal${ind}`} class="bi bi-play-circle-fill"></i> */}
                                <i onClick={() => [setShowModal(true), settargetModal(ind)]} class="bi bi-play-circle-fill"></i>
                                <img src={project.img} alt={project.img} style={{ width: '100%' }} />

                            </div>
                        </div>

                    </div>,
                    ]

                )}
            </Carousel>

            <div className="d-flex justify-content-center pt-5">
                <button className="cta" onClick={() => navigateTo('/home')}>
                    <span className="spanbtx">BACK</span>
                </button>
            </div>

            {/* <div class="modal fade " data-bs-theme="dark" id={`exampleModal${ind}`} tabindex="-1" aria-labelledby={`exampleModalLabel${ind}`} aria-hidden="true">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id={`exampleModalLabel${ind}`}>Project {ind + 1}</h1>
                                    <button onClick={() =>document.getElementsByTagName('iframe')[ind].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <ReactPlayer
                                        url={project.url} // Replace with your video URL
                                        controls // Show video controls
                                        width="100%" // Set the video width
                                        height="100%" // Adjust the height automatically
                                        stopOnUnmount={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}
            <Modal className="my-modal-projects" fullscreen={true} show={showModal}>
                <Modal.Body>
                    {readyToplay === false && <h4 className="fw-lighter mt-5 text-center overflow-hidden">Wait Please 🔃...</h4>}
                    <ReactPlayer
                        onReady={() => setReadyToplay(true)}
                        url={projects[targetModal].url} // Replace with your video URL
                        controls // Show video controls
                        width="100%" // Set the video width
                        height="100%" // Adjust the height automatically
                        stopOnUnmount={false}
                    />
                    {/* {carouselItems[activeIndex]?.modalContent} */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => [setShowModal(false), setReadyToplay(false)]}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default Projects;