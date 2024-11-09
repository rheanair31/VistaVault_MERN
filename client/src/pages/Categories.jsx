import React from "react";

function Categories() {
  return (
    <div className="flex justify-center space-x-4 p-4 border-b flex-wrap mt-6 border-t">
      <a href="#" className="flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6" 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.662.662 0 0 1 1.04 0l2.126 6.111a.663.663 0 0 0 .476.346l6.618.442c.499.04.701.663.321.988l-4.204 3.602a.663.663 0 0 0-.182.667l1.286 6.386a.662.662 0 0 1-.84.61l-4.726-2.886a.662.662 0 0 0-.686 0L6.982 20.64a.662.662 0 0 1-.84-.61l1.286-6.386a.662.662 0 0 0-.182-.667l-4.204-3.602a.662.662 0 0 1 .321-.988l6.618-.442a.663.663 0 0 0 .476-.346L11.48 3.6Z"
          />
        </svg>
        <p className="text-sm">Icons</p> 
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6" // Smaller size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.26 16.76 6.169-6.169a2.26 2.26 0 0 1 3.182 0l6.169 6.169m-1.6-1.6 1.409-1.409a2.26 2.26 0 0 1 3.182 0l2.909 2.909m-18 3.76h16.6a1.6 1.6 0 0 0 1.6-1.6V6a1.6 1.6 0 0 0-1.6-1.6H3.76A1.6 1.6 0 0 0 2.26 6v12a1.6 1.6 0 0 0 1.6 1.6Zm10.6-11.26h.008v.008h-.008V8.26Zm.376 0a.376.376 0 1 1-.76 0 .376.376 0 0 1 .76 0Z"
          />
        </svg>
        <p className="text-xm">Amazing views</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="h-6 w-6" // Smaller size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.6 12c0-1.232-.046-2.463-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.6 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.463.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.666 48.666 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.6 12l3 3m-3-3-3 3"
          />
        </svg>
        <p className="text-xm">Amazing pools</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="h-6 w-6" // Smaller size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.26 21v-4.876c0-.621.604-1.126 1.126-1.126h2.26c.621 0 1.126.604 1.126 1.126V21m0 0h4.6V3.646M12.76 21h7.6V10.76M2.26 21h1.6m18 0h-18M2.26 9l4.6-1.636M18.76 3l-1.6.646m0 6.206 3 1m1.6.6-1.6-.6M6.76 7.364V3h-3v18m3-13.636 10.6-3.819"
          />
        </svg>
        <p className="text-xm">Farms</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="h-6 w-6" // Smaller size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.26 12 8.964-8.966c.44-.439 1.162-.439 1.691 0L21.76 12M4.6 9.76v10.126c0 .621.604 1.126 1.126 1.126H9.76v-4.876c0-.621.604-1.126 1.126-1.126h2.26c.621 0 1.126.604 1.126 1.126V21h4.126c.621 0 1.126-.604 1.126-1.126V9.76M8.26 21h8.26"
          />
        </svg>
        <p className="text-xm">Historical homes</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">Castles</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">OMG!</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">Beach Front</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">Lake Front</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">Rooms</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">Luxe</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">Cabins</p> {/* Smaller text size */}
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-center">
      <img src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg" className="h-6 w-6" alt="" />
        <p className="text-xm">Top of the world</p> {/* Smaller text size */}
      </a>
      
    </div>
  );
}

export default Categories;
