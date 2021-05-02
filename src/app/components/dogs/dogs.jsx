import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DogsServices from '../../service/dogsServices';
import SelectComponent from '../common/selectComponent';

import './dogs.scss';

export default function Dogs() {
    const [loading, setLoading] = useState(false);
    const [dogs, setDogs] = useState([]);
    const [breed, setBreed] = useState(null);
    const [photosDogs, setPhotosDogs] = useState([]);

    const dispatch = useDispatch();

    const getDogs = () => {
        setLoading(true);
        DogsServices.getBreedsDogs().then((result) => {
            console.log(result);
            setDogs(Object.entries(result.message));
            setLoading(false);
        }).catch((error) => {
            const errorMessage = error.responseJSON
                ? error.responseJSON.error_message : error.statusText;
            setLoading(false);
        });
    }

    const getPhotosDogs = (dataBreed) => {
        setLoading(true);
        DogsServices.getPhotosBreed(dataBreed).then((result) => {
            console.log(result);
            setPhotosDogs(result.message);
            setLoading(false);
        }).catch((error) => {
            const errorMessage = error.responseJSON
                ? error.responseJSON.error_message : error.statusText;
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        getDogs();
    }, []);

    const renderPhotosDogs = () => {
        const list = photosDogs.map((photo, index) => {
            return (
                <div class="div-image-dog">
                    <img src={photo} alt={`dog-${index}`} />
                </div>
            );
        });
        return list;
    };

    const onChangeBreed = (breedSeleted) => {
        setPhotosDogs([]);
        const dogSelected = dogs[breedSeleted.value];
        if (dogSelected[1].length === 0) {
            getPhotosDogs(dogSelected[0]);
        } else {
            setBreed(dogSelected);
            console.log(breed);
        }
    }

    const onChangeTypeBreed = (typeBreedSelected) => {
        const dataBreed = `${breed[0]}\/${typeBreedSelected.value}`;
        getPhotosDogs(dataBreed);
    }

    return (
        <React.Fragment>
            <div id="dog-card">

                <div id="div-title-card-dogs"> Dogs </div>
                <div id="div-info-text-card-dogs">Selecciona la raza de perro de la que deseas visualizar las imagenes.</div>
                <div className="div-breed-selects">
                    <div className="div-select-component">
                        <SelectComponent
                            id="breed-select-component"
                            label="Raza"
                            options={dogs ? dogs.map((el, index) => ({ label: el[0], value: index })) : []}
                            onChange={onChangeBreed}
                        />
                    </div>
                    <div className="div-select-component">
                        {breed && breed[1].length > 0 && (<SelectComponent
                            id="type-breed-select-component"
                            label="Tipo"
                            options={breed ? breed[1].map((el) => ({ label: el, value: el })) : []}
                            onChange={onChangeTypeBreed}
                        />)}
                    </div>
                </div>
            </div>
            {photosDogs && (
                <div class="photos-dogs">
                    {renderPhotosDogs()}
                </div>
            )}

            {/* <Spinner
                textSpinner={'Loading ...'}
                loading={loading}
            /> */}
        </React.Fragment>
    );
}


Dogs.propTypes = {
};

Dogs.defaultProps = {
};
