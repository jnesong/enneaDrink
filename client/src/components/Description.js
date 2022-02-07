function Description( {content} ) {

    console.log(content)

    let displayedContent = <p>{content}</p>

    return (
        <div className="space">
            {displayedContent}
        </div>
    )
}

export default Description