import { httpService } from './http.service';
const IMAGE_URL = '/imageStore';
export const imageService = {
    saveImage,
    deleteAllImages,
};

async function saveImage(image) {
    try {
        const imageList = await httpService.post(IMAGE_URL, {
            image,
        });
        return imageList;
    } catch (error) {
        throw { error };
    }
}
async function deleteAllImages() {
    try {
        await httpService.delete(IMAGE_URL);
    } catch (error) {
        throw { error };
    }
}
