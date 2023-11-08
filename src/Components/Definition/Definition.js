import React from "react";
import "./Definition.css";

function Definition({ definitions }) {
  // console.log("meaning inside definition", definitions)
  // map over whatever you want and render
  // do logic here. maybe a function, call function in render. function can return its own JSX

    const wordMeaning = definitions.definitions.map((meaning, index) => {
      console.log("defininition", meaning)
      return (
        <div key={index}>
        <li>
          <span>{meaning.definition}</span>
        </li>
        { meaning.example && <p>"{meaning.example}"</p>}
        </div>
      )
    })
  
  return (
    <div>
      <p>{definitions.partOfSpeech}</p>
    {wordMeaning}
  </div>
  );
}

export default Definition;


// import React from "react";
// import "./Definition.css";

// function Definition({ wordDetail }) {
//   return (
//     <div>
//       <h2>{wordDetail.word}</h2>
//       <div className="phonetics">
//         {wordDetail.phonetics.map((phonetic, index) => (
//           <div key={index}>
//             {phonetic.audio && (
//               <audio controls>
//                 <source src={phonetic.audio} type="audio/mpeg" />
//                 Your browser does not support the audio element.
//               </audio>
//             )}
//             <span>{phonetic.text}</span>
//           </div>
//         ))}
//       </div>
//       {wordDetail.meanings.map((meaning, index) => (
//         <div key={index}>
//           <h3>{meaning.partOfSpeech}</h3>
//           <ul>
//             {meaning.definitions.map((definition, index) => (
//               <li key={index}>{definition.definition}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Definition;