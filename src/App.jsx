
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import BackToTopButton from './components/layout/BackToTopButton';


const App = () => {
  // const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  // useEffect(() => {
  //   fetchUserInfo();
  // }, [])

  // const fetchUserInfo = async () => {
  //   const res = await getAccountAPI();
  //   if (res.data) {

  //     setUser(res.data.user)
  //   }
  //   setIsAppLoading(false);
  // }

  return (
    <>
      {/* {isAppLoading === true ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
          <Spin /> 
        </div>
        :*/}
      <>
        <div className="app-wrapper">
          <Header />
          <main className="main-content">
            <Outlet />
          </main>
          <BackToTopButton />
          <Footer />
        </div>

      </>
      {/* } */}
    </>
  )
}

export default App
