import {defineStore} from 'pinia';

export const useMemoriesStore = defineStore({
    id: 'memories', state: () => {
        return {
            memories:[
                {
                    id: 'm1',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg',
                    title: 'A trip into the mountains',
                    description: 'It was a really nice trip!',
                },
                {
                    id: 'm2',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg',
                    title: 'Surfing the sea side',
                    description: 'Feeling the cool breeze',
                },
                {
                    id: 'm3',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg',
                    title: 'Good eating',
                    description: 'Really tasty!',
                },

            ]
        };
    }
});
