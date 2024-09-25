export const Layout = ({ children }) => {
  return (
    <div>
      <header style={{backgroundColor: 'grey'}}>Header</header>
      {children}
      <footer style={{backgroundColor: 'grey'}}>Footer</footer>
    </div>
  )
}