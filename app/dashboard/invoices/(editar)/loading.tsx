export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="w-32 h-32 relative animate-spin">
        <div className="h-full w-full rounded-full border-4 border-gray-100 border-t-blue-500" />
      </div>
       {/* <div className={`${lusitana.className} text-xl text-gray-500`}>
//         Cargando...
//       </div> */}
       {/* <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-100">
//         <div className="h-full w-1/2 animate-[loading_1s_ease-in-out_infinite] rounded-full bg-blue-500" />
//       </div> */}
     </div>
  );
}