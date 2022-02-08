function PracticesDescription({ content }) {

    console.log(content)

    let displayedContent = <ol>{content}</ol>

    return (
        <div className="space">
            {displayedContent}
        </div>
    )
}

export default PracticesDescription