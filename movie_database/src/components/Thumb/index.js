import React from 'react';

//styles
import { Image } from './Thumb.styles';


const Thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src={image} alt='movie-thmb' />
    </div>
)

export default Thumb;