import './singleChar.scss'


const SingleChar = ({data}) => {
    const {name, thumb, desc, isImgFound} = data
    const imgStyle = isImgFound ? {'objectFit' : 'cover'} : {'objectFit' : 'fill'};

    return (
        <div className="char">
            <img 
            src={thumb} 
            alt="Character" 
            className="char__image"
            style={imgStyle} />
            <div className="char__info">
                <p className="char__title">{name}</p>
                <p className="char__desc">{desc}</p>
            </div>
        </div>
    )
}

export default SingleChar