import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider, SignedIn, SignInButton, UserButton, SignedOut } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {  
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className="root-layout">
            <header>
                <Link to="/" className='logo'>
                    <img src="./logo.png" className='logoImg' alt="" />
                    <span>Nhat's GPT</span>         
                </Link>
                <div className="user">                    
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
        </ClerkProvider>
    );
};

export default RootLayout;