function Description( {content} ) {

    console.log(content)

    let displayedContent = <p className="paragraph">{content}</p>

    return (
        <div className="space" >
            {displayedContent}
        </div>
    )
}

export default Description