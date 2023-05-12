
function Section({heading, matter,color}){
    return(
        <div>
            <h2>{heading}</h2>
            <p style={{'text-align' : 'justify','font-size' : '18px','backgroundColor':color,'color':'white','border-radius':'50px','padding':'15px'}}>{matter}</p>
        </div>
    )
}

export default Section;