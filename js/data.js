//генерация данных

import {getRandomNumber, getRandomArrayElement} from './util.js';

//варианты комментариев для поста
const DESCRIPTION_OPTIONS = [
  'сегодня отличный день', 'в кексограме очень весело', 'позанимался 2 часа', 'включила новый плейлист',
  'кошечка заснула прямо на руках', 'сегодня много заданий', 'прочитала новую книгу'];

//количество постов в массиве
const SIMILAR_PHOTO_POSTS_COUNT = 25;

//количество лайков
const LIKES_COUNT = {
  min: 15,
  max: 200,
};

//количество комментариев
const COMMENTS_COUNT = {
  min: 0,
  max: 200,
};

//объявление функции с параметром index
const createPhotoPost = (index) => {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTION_OPTIONS),
    likes: getRandomNumber(LIKES_COUNT.min, LIKES_COUNT.max),
    comments: getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max),
  };
};

const photoPosts = () => Array.from({length: SIMILAR_PHOTO_POSTS_COUNT}, (_, photoPostIndex) => createPhotoPost(photoPostIndex));

export {photoPosts};
