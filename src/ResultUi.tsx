
import "./style.css";
import ElementsOfPotentialScam from './ElementsOfPotentialScam';



 const ResultUi = ({data, isProcessing}:any) => {
  return (
    <section className='right-section'>
    { data ?<>
     {/* 
     rating contaiter */}
     <div className='sec2-1-container'>
       <p className="labels">Scam Potential </p>
       {/* <p>Likelihood of being a scam</p> */}
       <p className='text-dark-500 text-3xl font-bold '>{data['Risk Rating']}/10</p>
     </div>
     {/* justification container */}
     <div className='sec2-2-container'>
       <p className="labels">Justification</p>
       <p className=' '>
      {data['Justification']}
       </p>
     </div>
     <div className='sec2-3-container'>
       <ElementsOfPotentialScam data={data['Elements of Scam']??[]} />
     </div>
     </> : (
     <div className="flex items-center justify-center h-full text-gray-600">
      { isProcessing? <LoadingScreen/>:<p>Please upload an image</p> }
     </div>
     )}
   </section>
  )
}


export default ResultUi


const LoadingScreen = () => {
    return (
      <div className="flex items-center justify-center h-full text-gray-600">
        <p className="labels">Processing the image</p>
      </div>
    );
  };