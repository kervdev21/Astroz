import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';


function discovery() {
    const { authUser, loading } = useAuth();
  const router = useRouter();
  // Listen for changes on loading and authUser, redirect if needed
  
    return (
        <div>
            Discovery Page
        </div>
    )
}

export default discovery
