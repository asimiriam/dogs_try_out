import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import DogsServices from '../../../service/dogsServices';
import SelectComponent from '../../common/selectComponent';
import { setToastMessage, setIsOpen, setBreed, setPhotosDogs} from '../../../slice';

import './dogCard.scss';

export default function DogCard() {
    const {breed} = useSelector(store => store.dogs);
    const [loading, setLoading] = useState(false);
    const [dogs, setDogs] = useState([]);

    const dispatch = useDispatch();

    const getDogs = () => {
        setLoading(true);
        DogsServices.getBreedsDogs().then((result) => {
            setDogs(Object.entries(result.message));
            setLoading(false);
        }).catch((error) => {
            dispatch(setToastMessage({
                title: error.responseJSON.status,
                message: error.responseJSON.message
            }));
            dispatch(setIsOpen(true));
            setLoading(false);
        });
    }

    const getPhotosDogs = (dataBreed) => {
        setLoading(true);
        DogsServices.getPhotosBreed(dataBreed).then((result) => {
            dispatch(setPhotosDogs(result.message));
            setLoading(false);
        }).catch((error) => {
            dispatch(setToastMessage({
                title: error.responseJSON.status,
                message: error.responseJSON.message
            }));
            dispatch(setIsOpen(true));
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        getDogs();
    }, []);

    const onChangeBreed = (breedSeleted) => {
        dispatch(setPhotosDogs([]));
        const dogSelected = dogs[breedSeleted.value];
        dispatch(setBreed(dogSelected));
        if (dogSelected[1].length === 0) {
            getPhotosDogs(dogSelected[0]);
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
            <Loader
                type="Oval"
                color="#2E4053"
                height={80}
                width={80}
                visible={loading}
            />
        </React.Fragment>
    );
}
