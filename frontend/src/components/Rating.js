function Rating(props) {
    const { rating, numReviews } = props
    return (
        <div>
            <div className="rating">
                <span><i className={rating >= 1.0 ? "fa fa-star" : rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i></span>
                <span><i className={rating >= 2.0 ? "fa fa-star" : rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i></span>
                <span><i className={rating >= 3.0 ? "fa fa-star" : rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i></span>
                <span><i className={rating >= 4.0 ? "fa fa-star" : rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i></span>
                <span><i className={rating >= 5.0 ? "fa fa-star" : rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i></span>
                <span>{numReviews} Reviews</span>
            </div>
        </div>
    )
}

export default Rating