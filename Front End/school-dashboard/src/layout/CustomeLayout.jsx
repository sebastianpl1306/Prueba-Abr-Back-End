import { NavBarHome } from "../components"

export const CustomeLayout = ({ children }) => {
  return (
    <>
      <NavBarHome/>
      { children }
    </>
  )
}