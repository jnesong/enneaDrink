function HealthDescription({ content }) {

    console.log(content)

    let displayedContent = <ul>{content}</ul>

    return (
        <div className="space">
            <p className="title"> The Levels of Development are means of measuring our capacity to be fully present in our relationships and use our personality and
                gifts in life-giving ways. </p>
            {displayedContent}
        </div>
    )
}

export default HealthDescription