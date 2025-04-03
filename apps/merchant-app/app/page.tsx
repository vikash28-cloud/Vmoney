"use client";
import {useBalance} from "@repo/store/useBalance"

export default function Home() {
  const balance = useBalance();
    return(
   <div> 
    <h1>hello merchant</h1>
    <p>{balance}</p>
   </div>
  );
}
