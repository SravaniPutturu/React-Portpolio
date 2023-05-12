
import Header from './Header'
import './App.css'
import Image from './Image'
import Section from './Section'

function App(){
    return(
       <div className='center'>
          <Header />
          <Image/>
          <Section color='purple' heading="Skills" matter="I'm passionate about Frontend Development and I love using my skills to develop applications.
            In terms of my skills, I have experience in react development. I'm proficient in HTML, CSS, JavaScript and React.
             and Hardwork, Critical Thinking, Persitence, Confidence are my strengths.
           When I'm not working, I enjoy Social Work and I also volunteer for Disaster Management System.
          " />
          <Section color='black' heading="Qualifications" matter="I am done my graduation in a steam of Computer Science at Sree Venkateswara college of Engineering. it is affiliated form JNTUA university. at my graduation im got 63%.
            after that I am joined at acciojob apart from that I learned HIML, CSS, JavaScript, React Framework.        " />
          <Section color='grey' heading="Projects" matter="I am done my Tour and Travel Management System project at my academics. after that i joined at acciojob i am done several projects Shopping Cart, Google Sheet and Auction app and api based QR code generator, Gio location api to get information and IPinfo api based project.         " />
          <footer style={{'padding':'15px','background': 'black','margin-top':'10px'}}><a style={{'color':'white'}} href='https://www.linkedin.com/in/sravani-putturu-36956a252/'>@linkedin</a></footer>
       </div>
    )
}

export default App;


{/* Hi, I'm Sravani. I am interested in Frontend Development and my goal is to be a Sofeware Developer. In my free time, I play puzzles, Chess  and spending time with my pets. If you would like to connect with me, please contact me on putturusravani.123@gamail.com */}
