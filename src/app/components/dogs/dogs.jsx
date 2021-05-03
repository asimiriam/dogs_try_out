import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-toast-component';
import DogCard from './dogCard';
import { setIsOpen } from '../../slice';

import './dogs.scss';

export default function Dogs() {
    const { titleToast, messageToast, isOpen } = useSelector(store => store.toast);
    const { photosDogs } = useSelector(store => store.dogs);

    const dispatch = useDispatch();

    const renderPhotosDogs = () => {
        const list = photosDogs.map((photo, index) => {
            return (
                <div className="div-image-dog">
                    <img src={photo} alt={`dog-${index}`} />
                </div>
            );
        });
        return list;
    };

    const closeToastMessage = () => {
        dispatch(setIsOpen(false));
    }

    return (
        <React.Fragment>
            <Toast
                isOpen={isOpen}
                hasCloseBtn
                closeCallback={closeToastMessage}
                description={messageToast}
                title={titleToast}
                duration={10000}
                classNames={['error']}
            />
            <DogCard />
            {photosDogs && (
                <div className="photos-dogs">
                    {renderPhotosDogs()}
                </div>
            )}
        </React.Fragment>
    );
}

