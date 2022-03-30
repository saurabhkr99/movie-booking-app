import React from "react";

// props -> movie name, summary, img


const MovieSummary = (props) => {

    const { name, summary, img } = props
    console.log("summary:-", summary);

    return (
        <div className="text-center">
            <h3 >
                {name}
            </h3>
            <img alt='movie' width={'30%'} src={img} />
            <div dangerouslySetInnerHTML={{ __html: summary }} className="mt-4">
            </div>
        </div>
    )
}

export default MovieSummary;