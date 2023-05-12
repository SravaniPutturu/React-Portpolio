
import Img from './Img.jpg'
 
function Image(){
    return(
        <div>
            <h2>About Me</h2>
            <img src={Img} width={120} height={200} style={{'border-radius' : '60px','margin':'10px'}}  alt="portfolio"/>
            <p style={{'text-align' : 'justify','font-size' : '18px','background':'grey','color':'white' , 'padding':'15px','border-radius':'50px'}}>Hi, I'm Sravani. I am interested in Frontend Development and my goal is to be a Sofeware Developer. In my free time, I play puzzles, Chess  and spending time with my pets. If you would like to connect with me, please contact me on putturusravani.123@gamail.com.</p>
        </div>
    )
}

export default Image;