import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Spinner = ({path = "SignIn"}) => {
  const [count,setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount)=> --prevCount);
        },1000); 
        count === 0 && navigate(`/${path}`,{
            state: location.pathname
        });
        return () => clearInterval(interval);
    },[count,navigate,location,path]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  <h1 className="text-xl mb-4 text-center">
    Redirecting to you in <span className="font-bold">{count}</span> second{count > 1 && "s"}...
  </h1>
  <div className="border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
</div>

  );
};

export default Spinner;