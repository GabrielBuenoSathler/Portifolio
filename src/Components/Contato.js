import react from "react";

function Contato() {
  return (
    <div className="Contato">
      <dl>
         <dt>
             <a href="https://github.com/GabrielBuenoSathler">
             <img src="git_2.png" alt="github" id="git" ></img>
             </a>
         </dt>
         <dt>
          <a href="https://api.whatsapp.com/send?phone=5512996719790">
         <img src="output-onlinepngtools.png"  alt='whatsapp' id="whats"></img>
         </a>
         </dt>
         <dt>
         <a  href="https://www.linkedin.com/in/gabriel-bueno-sathler-47b81a130" >
         <img src="linkend_2.png" id="linkedin"></img>
         </a>
          </dt>

     </dl> 
    </div>
  );
}

export default Contato;