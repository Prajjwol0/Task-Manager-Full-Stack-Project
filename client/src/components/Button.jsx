
export default function Button({text,colour}) {
 

  return (
   <div>
    
       <button className={`${colour} hover:opacity-90 text-white font-semibold px-4 py-1.5 text-sm rounded-md shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300`}>
        {text}
      </button>
    </div>
  );
}