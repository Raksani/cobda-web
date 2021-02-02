import Footer from '../components/Footer'
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'

const SignUp = () => (
  <div className="layout-authentication">
    <header>
      <Navbar />
    </header>
    <main>
      <SignUpForm />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default SignUp