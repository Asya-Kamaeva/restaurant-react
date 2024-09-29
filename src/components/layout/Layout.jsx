import { ProgressBar } from "../progressBar/progressBar"

export const Layout = ({ children }) => {
  return (
    <div>
      <header style={{backgroundColor: 'grey'}}>Header</header>
      <ProgressBar />
      {children}
      <footer style={{backgroundColor: 'grey'}}>Footer</footer>
    </div>
  )
}