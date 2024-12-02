import { Routes,Route } from "react-router-dom";
import FloatingShapes from "./components/FloatingShapes";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import VerifyEmail from "./Pages/verifyEmail";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./Pages/DashboardPage";
import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";
import ResetPassword from "./Pages/resetPassword";
import ResetPasswordToken from "./Pages/resetPasswordToken";
export default function App() {
  // protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verifyEmail' replace />;
	}

	return children;
};


// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated ) {
		return <Navigate to='/' replace />;
	}

	return children;
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center overflow-hidden ">
   <FloatingShapes color='bg-green-500' size='w-64 h-64' top="5%" left='10%' delay={0}/>
   <FloatingShapes color='bg-emerald-500' size='w-48 h-48' top="25%" left='50%' delay={5}/>
   <FloatingShapes color='bg-lime-500' size='w-32 h-32' top="50%" left='-5%' delay={2}/>
   <Routes>
   <Route path="/" element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
    } />
<Route path="/login" element={
  <RedirectAuthenticatedUser>
  <Login />
  </RedirectAuthenticatedUser>
  } />
<Route path="/signup" element={
  <RedirectAuthenticatedUser>
  <Signup />
  </RedirectAuthenticatedUser>
  } />
<Route path="/verifyEmail" element={
  <RedirectAuthenticatedUser>
  <VerifyEmail />
  </RedirectAuthenticatedUser>
  } />
   <Route path="/resetPassword" element={
    <RedirectAuthenticatedUser>
    {/* Add your reset password component here */}
    <ResetPassword/>
    </RedirectAuthenticatedUser>
   }/>
   <Route path="/resetPassword/:token" element={
    <RedirectAuthenticatedUser>
    {/* Add your reset password component here */}
    <ResetPasswordToken/>
    </RedirectAuthenticatedUser>
   }/>
      </Routes>

   <Toaster/>  
    </div>
  )
}