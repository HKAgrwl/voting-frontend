import React from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { useState,useEffect } from 'react';

export default function Login() {
  const [payload,setPayload] = useState(null);
  useEffect(()=>{
    const mojoauth = new MojoAuth("test-dd548f44-8b91-40ce-8bc2-c96a493f6d43", {
        // language: "language_code",
        redirect_url: "http://localhost:3000/dashboard",
        source: [
          { type: "email", feature: "magiclink" },
        ],
  })

  mojoauth.signIn().then(payload => {
    // const userObj = JSON.parse(payload);
    const user = payload.user.email;
    console.log(user);
  })
}, [payload])
  return (
    <div>
        <div id="mojoauth-passwordless-form" />

    {/* <pre>{JSON.stringify(payload, null, 4)}</pre> */}
    </div>
  )
}
