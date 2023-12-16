// import React, { Component } from 'react'
// import Icon from './assets/images/pic.jpg'

// class Learn extends Component {
//     render() {
//         const etudiants = [
//             'Aliou',
//             'Moussa',
//             'Fatou',
//             'Demba'
//         ];

//         const liste = etudiants.map((etudiants, key) => <li key={key}>{etudiants}</li>)
//         return(

//             <div className="w- p-4 m-auto my-3 rounded-lg shadow shadow-blue-500 space-y-6 text-gray-600 sm:max-w-md items-center justify-center bg-gray-50">
//                 {/* <h1 className='underline uppercase font-bold text-2xl m-3'>La liste des etudiants</h1>
//                 <ul>{liste}</ul> */}

//                     <h1 className='font-bold  text-center underline uppercase text-2xl'>Formulaire d'inscription</h1>
//                 <form action="" className='space-y-5'>
//                     <label htmlFor="prenom" className='font-medium'>Prenom</label>
//                     <input type="text" name="prenom" id="prenom" className='w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg' />
//                     <label htmlFor="nom" className='font-medium'>Nom</label>
//                     <input type="text" name="nom" id="nom" className='w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg' />
//                     <label htmlFor="email" className='font-medium'>Email</label>
//                     <input type="email" name="email" id="email" className='w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg' />
//                     <button className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150">
//                         Envoyer
//                     </button>
//                 </form>
                
//             </div>
//         );
        
//     }
// }
// export default Learn;

import React, {useState} from 'react';

function Learn() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
    }
    return (
        <div>
            <p>Incrementation</p>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Learn;