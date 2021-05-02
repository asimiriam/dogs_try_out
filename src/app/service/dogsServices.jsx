import { xhrCall, controlResponseForbidden } from './xhr';

class DogsService {
    static dogUrl = 'https://dog.ceo/api/breeds/list/all';
    static breedDogLUrl = 'https://dog.ceo/api/breed/';

    static getBreedsDogs(data = null) {
        return new Promise((resolve, reject) => {
            xhrCall('GET', DogsService.dogUrl, data || {})
                .done((response) => {
                    resolve(response);
                })
                .fail((error) => {
                    controlResponseForbidden(error, reject);
                });
        });
    }

    static getPhotosBreed(breed, data = null) {
        const url = `${DogsService.breedDogLUrl}${breed}/images`;
        return new Promise((resolve, reject) => {
            xhrCall('GET', url, data || {})
                .done((response) => {
                    resolve(response);
                })
                .fail((error) => {
                    controlResponseForbidden(error, reject);
                });
        });
    }
}


export default DogsService;
