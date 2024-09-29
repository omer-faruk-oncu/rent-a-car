import Cars from "../components/Cars"
import ReservationList from "../components/ReservationList"
const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">RENT A CAR</h1>
      <Cars />
      <ReservationList />
    </main>
  )
}

export default Home