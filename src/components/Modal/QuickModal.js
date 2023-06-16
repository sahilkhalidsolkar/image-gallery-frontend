import React from 'react'
import Modal from 'react-modal';
import './QuickModal.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: '2px solid rgba(0, 0, 0, 0.342)',
        background: 'rgb(69, 23, 83)',
        transform: 'translate(-50%, -50%)',
    },
};
const QuickModal = ({ setIsOpen, currentSelected, modalIsOpen }) => {


    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div><Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >

            <div className="quickModal_heading">Gallery

                <button onClick={closeModal} className="quickModal_headingButton">x</button>
            </div>
            <div className="fullImage">
                <img src={currentSelected} alt="no image" />
            </div>
            {/* <div className="quickModal_form">
            </div> */}
        </Modal></div>
    )
}

export default QuickModal