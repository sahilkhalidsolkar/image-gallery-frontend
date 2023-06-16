import React, { useEffect, useContext, Fragment, useState } from 'react'
import ImageContext from '../context/image/ImageContext'
import AuthContext from '../context/auth/AuthContext'
import Axios from 'axios'
import fileDownload from 'js-file-download'
import QuickModal from './Modal/QuickModal'

const MainPage = () => {
    const { loadImage, image, deleteData } = useContext(ImageContext);
    const { isAuthenticated, user } = useContext(AuthContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentSelected, setCurrentSelected] = useState('');

    useEffect(() => {
        loadImage()
    }, [isAuthenticated]);

    const downloadImage = (url) => {
        const arr = url.split('/')
        Axios.get(url, {
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, arr[arr.length - 1]);
        });
    }
    return (
        <Fragment>
            <p className="welcome"> Welcome <span>{user?.name}</span> to your Gallery ..</p>
            <QuickModal currentSelected={currentSelected} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />

            <div className="images_container">
                {image?.map((image, index) => {
                    return (

                        <div key={image.image_id}
                            onClick={() => {
                                setIsOpen(true)
                                setCurrentSelected(image.image_url)
                            }}
                            className="image_container">
                            {/* <div className="image_containerOverlay"> */}
                            <img src={image.image_url} alt={image.image_id} className="imagestyle" />
                            <div className="options">
                                <i className="fas fa-trash trash_position" onClick={(e) => {
                                    e.preventDefault()
                                    deleteData(image._id)

                                }}></i>
                                <i className="fas fa-arrow-circle-down" onClick={(e) => {
                                    e.preventDefault();
                                    downloadImage(image.image_url)
                                }}></i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default MainPage
